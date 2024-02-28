"use client"

import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import ArticleCard from "./ArticleCard"

const ShopList = (props: any) => {
  const articleList = {...props.props}.articleList
  return (
    <ScrollArea className="h-max w-max rounded-md border">
      <div className="p-4 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3">
        {articleList.map((article: any) => (
            <ArticleCard key={article.id} props={article} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default ShopList;
