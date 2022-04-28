import { createContext, useContext } from "react";

// Create Context object.
const ProductContext = createContext();

// Export Provider.
export function ProductProvider(props) {
  const { value, children } = props;

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

// Export useContext Hook.
export function useProductContext() {
  return useContext(ProductContext);
}
