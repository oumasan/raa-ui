"use client"

import React from "react";
import Link from "next/link";

const PublicHeader = () => {
  return (
    <div className="py-8 px-10 flex items-center justify-between">
      <Link href={"/"} className="font-medium">Raa</Link>
    </div>
  )
}

export default PublicHeader;