import { Metadata } from "next";
import SignUpClient from "./SignUpClient";

export const metadata: Metadata = {
  title: "회원가입 - My NextJS App",
  description: "회원가입을 통해 To-Do List 애플리케이션에 등록하세요.",
};

export default function SignUpPage() {
  return <SignUpClient />;
}
