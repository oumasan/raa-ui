"use client"

import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import ShopCard from "./ShopCard"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ShopList = () => {
  return (
    <ScrollArea className="h-max w-max rounded-md border">
      <div className="p-4 grid grid-cols-3 gap-3">
        {tags.map((tag) => (
          <>
            <ShopCard key={tag} />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ShopList;
