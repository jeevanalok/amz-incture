import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCartData = localStorage.getItem("cart");
    return localCartData ? JSON.parse(localCartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (item, suppliedQuantity = null) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      let updatedCartData = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          // If supplied quantity is provided, add that quantity to the existing quantity
          if (suppliedQuantity) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + suppliedQuantity,
            };
          } else {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
        } else {
          return cartItem;
        }
      });

      setCart(updatedCartData);
    } else {
      if (suppliedQuantity) {
        setCart([...cart, { ...item, quantity: suppliedQuantity }]);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    }
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Clear cart function
  const clearCart = () => {
    setCart([]);
  };

  // Update quantity function
  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Cart total function
  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Cart quantity function
  const cartQuantity = useCallback(() => {
    let quantity = 0;
    cart.forEach((item) => {
      quantity += item.quantity;
    });

    return quantity;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartTotal,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
