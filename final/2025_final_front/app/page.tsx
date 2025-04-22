"use client";

import GuestbookCard from "@/components/guestbook/GuestbookCard";
import { useEffect, useState } from "react";
import { Guestbook } from "@/types/guestbook";
import { getGuestbook } from "@/utils/api";

export default function Home() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    getGuestbook().then((guestbooks) => setGuestbooks(guestbooks));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">방명록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg animate-fadeIn">
        {guestbooks.map((guestbook) => (
          <div
            className="transform hover:scale-105 transition-all duration-300 hover:z-10"
            key={guestbook.id}
          >
            <GuestbookCard guestbook={guestbook} />
          </div>
        ))}
      </div>
    </main>
  );
}
