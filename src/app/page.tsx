"use client"
import Image from "next/image";
import "./home.css"
import { useState } from "react";

export default function Home() {
  const [user,setUser] = useState("example user")

  return (
    <div className="home">
      <div className="section-1">
        <h4>Hello, {user}. What will you watch today? </h4>
        <p>Recommended videos for you</p>
      </div>
    </div>
  );
}
