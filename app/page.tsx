import ShopList from "@/components/ShopList";
import ShopsCombobox from "@/components/ShopsCombobox";
import ShopsData from "@/assets/json/shops.json";
import ArticleData from "@/assets/json/article.json"

/**
 * フェーズ1：データソースjson
 * @returns 
 */
export default function Home() {
  return (
    <main className="pt-5">
      <div className="flex justify-center">
        <div className="">
          <ShopsCombobox props={ShopsData}/>
          <ShopList props={ArticleData}/>
        </div>
      </div>
    </main>
  );
}
