"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import useMounted from "@/hooks/use-mounted";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const { isMounted } = useMounted();
  const { items } = useCart();

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {items.length === 0 && (
                <p className="text-neutral-500">No items added to cart</p>
              )}
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
