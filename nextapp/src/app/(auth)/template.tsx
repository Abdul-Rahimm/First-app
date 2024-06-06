"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useSyncExternalStore } from "react";
import "./styles.css";
import { useState } from "react";

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
  const [input, setInput] = useState("");

  return (
    <div>
      {children}
      <div>
        <input
          className="border border-black"
          type="text"
          placeholder="please enter "
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>

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
