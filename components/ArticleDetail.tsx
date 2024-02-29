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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faWineGlass } from '@fortawesome/free-solid-svg-icons'

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
        <CardDescription className="mb-2 flex">
          <div className="mr-2">
            時間帯:&nbsp;
            <FontAwesomeIcon icon={faMoon} bounce style={{color: "#FFD43B", display: article.timeZone !== "midnight" ? "none" : ""}} />
          </div>
          <div className="mr-2">
            状態:&nbsp;
            <FontAwesomeIcon icon={faWineGlass} bounce style={{color: "#B197FC",}} />
          </div>
        </CardDescription>
        <CardDescription className="mb-3 flex">
          <div className="mr-2 flex">
            種類:&nbsp;
            <div className="" style={{display: article.type !== "tonkotsu" ? "none" : ""}}>豚骨</div>
          </div>
        </CardDescription>
        <CardDescription className="tracking-wider break-words">{article.comment}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ArticleDetail;