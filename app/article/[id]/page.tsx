import ShopsData from "@/assets/json/shops.json";
import ArticleData from "@/assets/json/article.json"
import ArticleDetail from "@/components/ArticleDetail"

export default function Article({ params }: { params: { id: Number } }) {
  const article = ArticleData.articleList.find(article => article.id.toString() === params.id.toString())
  const shop = ShopsData.shopList.find(shop => shop.id === article?.shopId)
  const data = { ...article, ...shop}
  return (
    <main className="pt-5">
      <div className="flex justify-center">
        <ArticleDetail props={data} />
      </div>
    </main>
  );
}