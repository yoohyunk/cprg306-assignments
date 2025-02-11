import { NewItem } from "./new-item";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-4 gap-4">
      <NewItem />
    </div>
  );
}
