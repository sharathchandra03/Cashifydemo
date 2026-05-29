import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserRole = "customer" | "superadmin" | "branch" | "vendor";

interface SellFlowState {
  category: string | null;
  brand: string | null;
  model: string | null;
  questions: Record<string, string>;
  finalPrice: number;
  deductions: { reason: string; amount: number }[];
}

interface AppState {
  // Role management
  currentRole: UserRole;
  setRole: (role: UserRole) => void;

  // Sell flow state
  sellFlow: SellFlowState;
  setSellCategory: (category: string) => void;
  setSellBrand: (brand: string) => void;
  setSellModel: (model: string) => void;
  setQuestionAnswer: (questionId: string, answer: string) => void;
  setFinalPrice: (price: number, deductions: { reason: string; amount: number }[]) => void;
  resetSellFlow: () => void;

  // Wishlist
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;

  // Cart (for buy flow)
  cart: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

const initialSellFlow: SellFlowState = {
  category: null,
  brand: null,
  model: null,
  questions: {},
  finalPrice: 0,
  deductions: [],
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Role
      currentRole: "customer",
      setRole: (role) => set({ currentRole: role }),

      // Sell flow
      sellFlow: initialSellFlow,
      setSellCategory: (category) =>
        set((state) => ({
          sellFlow: { ...state.sellFlow, category, brand: null, model: null, questions: {} },
        })),
      setSellBrand: (brand) =>
        set((state) => ({
          sellFlow: { ...state.sellFlow, brand, model: null, questions: {} },
        })),
      setSellModel: (model) =>
        set((state) => ({
          sellFlow: { ...state.sellFlow, model, questions: {} },
        })),
      setQuestionAnswer: (questionId, answer) =>
        set((state) => ({
          sellFlow: {
            ...state.sellFlow,
            questions: { ...state.sellFlow.questions, [questionId]: answer },
          },
        })),
      setFinalPrice: (price, deductions) =>
        set((state) => ({
          sellFlow: { ...state.sellFlow, finalPrice: price, deductions },
        })),
      resetSellFlow: () => set({ sellFlow: initialSellFlow }),

      // Wishlist
      wishlist: [],
      addToWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist
            : [...state.wishlist, productId],
        })),
      removeFromWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((id) => id !== productId),
        })),

      // Cart
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateCartQuantity: (productId, quantity) =>
        set((state) => ({
          cart: quantity <= 0
            ? state.cart.filter((item) => item.id !== productId)
            : state.cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
              ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "u2u-storage",
      partialize: (state) => ({
        wishlist: state.wishlist,
        cart: state.cart,
        currentRole: state.currentRole,
      }),
    }
  )
);
