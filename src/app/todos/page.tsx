import { Metadata } from "next";
import TodosClient from "./TodosClient";

export const metadata: Metadata = {
  title: "할 일 목록 - My NextJS App",
  description: "회원 인증 후 사용할 수 있는 할 일 몰록 관리 페이지입니다.",
};

export default function SignUpPage() {
  return <TodosClient />;
}
