export function Item({ name, quantity, category }) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-yellow-100 text-black rounded-lg w-full">
      <div>Name: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </div>
  );
}
