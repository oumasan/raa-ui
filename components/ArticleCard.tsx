import * as React from "react"
import Image from "next/image"
import NoImage from "@/assets/images/no_image.jpeg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ShopsData from "@/assets/json/shops.json";

const ShopCard = (props: any) => {
  const article = {...props.props}
  const shop = ShopsData.shopList.find(shop => shop.id === article.shopId)
  return (
    <Card className="w-[280px] lg:w-[350px]">
      <CardContent>
        <Image
          src={article.image ? `/article/${article.image}` : NoImage}
          className="w-[250px] h-[200px] lg:w-[300px] lg:h-[300px] m-auto rounded-md"
          width={250}
          height={200}
          priority={true}
          fetchPriority="high"
          alt="Picture of the author"
        />
      </CardContent>
      <CardFooter>
        <CardTitle className="mb-3">{shop?.display}</CardTitle>
        <CardDescription>{`${article.ramen} : ${article.price}`}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ShopCard;
