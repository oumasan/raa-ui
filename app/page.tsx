import ShopList from "@/components/ShopList";
import ShopsCombobox from "@/components/ShopsCombobox";

export default function Home() {
  return (
    <main className="pt-5">
      <div className="flex justify-center">
        <div>
          <ShopsCombobox />
          <ShopList />
        </div>
      </div>
    </main>
  );
}
