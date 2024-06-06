"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {children}
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <h1>
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive
                  ? "font-bold-mr-4 text-4xl text-blue-500"
                  : " mr-4 text-4xl"
              }
            >
              {link.name}
            </Link>
          </h1>
        );
      })}
    </div>
  );
}
