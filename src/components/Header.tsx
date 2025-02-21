"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeTab = usePathname(), setActiveTab] = useState("/");

  return (
    <header>
      <nav>
        <ul className="flex border-b">
          {[
            { name: "Home", path: "/" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "Pokemon", path: "/pokemon" },
          ].map((item) => (
            <li key={item.path} className="mr-1">
              <Link
                href={item.path}
                className={`bg-white inline-block py-2 px-4 font-semibold 
                  ${
                    activeTab === item.path
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-blue-500 hover:text-blue-800"
                  }`}
                onClick={() => setActiveTab(item.path)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
