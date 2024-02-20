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

const ShopCard = (article: any) => {
  return (
    <Card className="w-[280px] lg:w-[350px]">
      <CardContent>
        <Image
          src={article.props.imagePath ? article.props.imagePath : NoImage}
          className="w-[230px] h-[230px] lg:w-[300px] lg:h-[300px]"
          alt="Picture of the author"
        />
      </CardContent>
      <CardFooter>
        <CardTitle className="mb-3">{article.props.shopName}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ShopCard;
