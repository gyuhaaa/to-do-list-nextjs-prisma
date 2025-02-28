"use client";

import { FormEvent, useState } from "react";
import { useEmailValidator } from "../hooks/useEmailValidator";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import useSWRMutation from "swr/mutation";

const loginFetcher = (url: string, { arg }: { arg: any }) =>
  fetch(`/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json());

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { isValidEmail } = useEmailValidator();

  const { setUser } = useAuth();

  const { trigger, isMutating } = useSWRMutation("/api/login", loginFetcher);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) return;

    if (!isValidEmail(email)) {
      setErrorMessage("올바른 이메일 양식을 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("비밀번호는 최소 6자리 이상이어야 합니다.");
      return;
    }

    const data = await trigger({ email, password });

    console.log(data);

    if (data.success) {
      alert(`환영합니다! ${data.data.name}님`);

      setUser(data.data);

      router.push("/todos");
    } else {
      setErrorMessage(data.error || "로그인 실패했습니다.");
    }
  };

  return (
    <main className="inner-container">
      <h1 className="h1-style">로그인</h1>
      <form className="form-style" onSubmit={handleLogin}>
        <input
          className="input-style"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-style"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="button-style" type="submit">
          로그인
        </button>
      </form>
    </main>
  );
}
