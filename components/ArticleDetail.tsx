import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import NoImage from "@/assets/images/no_image.jpeg"

const ArticleDetail = (props: any) => {
  const article = {...props.props}
  return (
    <Card className="w-[350px] lg:w-[350px]">
      <CardHeader>
        <CardTitle>{article?.display}</CardTitle>
      </CardHeader>
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
        <CardTitle className="mb-3">{`${article.ramen} : ${article.price}`}</CardTitle>
        <CardDescription className="tracking-wider break-words">{article.comment}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ArticleDetail;