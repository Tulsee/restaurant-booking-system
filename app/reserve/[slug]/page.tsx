import Link from "next/link";
import React from "react";
import { Navbar } from "../../components";
import { Form, Header } from "./components";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
