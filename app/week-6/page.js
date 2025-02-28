import { ItemList } from "./item-list";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-4 gap-6">
      <h1 className="text-2xl text-rose-400 font-bold text-center ">
        Shopping List
      </h1>
      <ItemList />
    </div>
  );
}
