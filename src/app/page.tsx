import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - My NextJS App",
  description:
    "Welcome to the To-Do List project built with NextJS App Router.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to My NextJS App
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        간단한 회원가입과 로그인 기능이 포함된 To-Do List 애플리케이션입니다.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link
          href="/signup"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
        >
          회원가입
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
        >
          로그인
        </Link>
      </div>
    </main>
  );
}
