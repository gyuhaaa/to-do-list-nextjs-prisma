import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My NextJS App - To-Do List Project",
  description:
    "A simple To-Do List app with sign-up and login funcationality using NextJS App Router.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className="bg-gray-50">
        <header className="bg-blue-800 text-white py-4 shadow-md">
          <div className="container flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">
              <Link href="/">My NextJS App</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/signup" className="hover:underline">
                    회원가입
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:underline">
                    로그인
                  </Link>
                </li>
                <li>
                  <Link href="/todos" className="hover:underline">
                    할 일 목록
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container py-10 px-4">{children}</main>
        <footer className="bg-blue-800 text-white py-4">
          <div className="container mx-auto text-center">
            © 2025 My NextJS App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
