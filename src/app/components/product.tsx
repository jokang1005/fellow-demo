import { useState } from "react";

interface IProps {
  id: number;
  name: string;
  cost: string;
}

export default function Product({ id, name, cost }: IProps) {
  const [cart, setCart] = useState<
    { id: number; name: string; cost: string; quantity: number }[]
  >([]);

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevData) => [...prevData, { id, name, cost, quantity: 1 }]);
    }
  };
  const itemQuantity = cart.filter((item) => item.id === id);
  console.log("itemQuantity", itemQuantity);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-black text-white hover:bg-fellow-yellow border-2 hover:border-white hover:text-white my-8 px-16 py-4 rounded-2xl"
      >
        Add to Cart
      </button>
      <div className="bg-fellow-yellow rounded-full w-8">
        {itemQuantity[0] ? itemQuantity[0].quantity : ""}
      </div>
    </div>
  );
}
