"use client";

import { useEffect } from "react";

export default function Form({
  name,
  email,
  password,
}: Readonly<{
  name: string;
  email: string;
  password: string;
}>) {
  useEffect(() => {
    console.log("Form mounted");
    return () => {
      console.log("Form unmounted");
    };
  }, []);
  return (
    <form>
      <input type="text" placeholder={name} />
      <input type="email" placeholder={email} />
      <input type="password" placeholder={password} />
      <button onClick={() => console.log("done")}>Submit</button>
    </form>
  );
}
