"use client"

import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import ShopCard from "./ShopCard"

// 仮配列
const articles = Array.from({ length: 50 }).map(
  (_, index) => ({ id: index + 1, shopName: "一蘭", imagePath: "" })
);

console.log(articles)

const ShopList = () => {
  return (
    <ScrollArea className="h-max w-max rounded-md border">
      <div className="p-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">
        {articles.map((article) => (
            <ShopCard key={article.id} props={article} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default ShopList;
