"use client";

import React from "react";
import { useParams } from "next/navigation";
export default function page() {
  const params = useParams();
  console.log(params);
  return (
    <div>HOw to talk to backend in nextjs 13 app router {params.slug}</div>
  );
}
