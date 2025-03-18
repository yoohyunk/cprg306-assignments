export function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="flex flex-col gap-1 p-4 bg-yellow-100 text-black rounded-lg w-full"
    >
      <div>Name: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </div>
  );
}
