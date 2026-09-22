import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type CartContextValue = {
  count: number;
  add: (qty?: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(1);
  const value = useMemo(
    () => ({
      count,
      add: (qty = 1) => setCount((n) => n + qty),
    }),
    [count],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("CartProvider missing");
  return ctx;
}
