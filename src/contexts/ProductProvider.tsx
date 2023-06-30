import { useReducer, useMemo, ReactElement, createContext } from "react";

export type ProductItemType = {
  id?: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type CategoryItemType = string[];

type ProductStateType = {
  products: ProductItemType[];
  categories: CategoryItemType;
  selectedCategory: string;
};

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

const REDUCER_ACTION_TYPE = {
  GETPRODUCTS: "GETPRODUCTS",
  GETPRODUCT: "GETPRODUCT",
  GETCATEGORIES: "GETCATEGORIES",
  GETCATEGORY: "GETCATEGORY",
  SETSELECTEDCATEGORY: "SETSELECTEDCATEGORY",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
export type ReducerAction = {
  type: string;
  payload?: {
    product?: ProductItemType;
    products?: ProductItemType[];
    category?: CategoryItemType;
    categories?: CategoryItemType;
    selectedCategory?: string;
  };
};

// Create Reducer for product provider
const reducer = (
  state: ProductStateType,
  action: ReducerAction
): ProductStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.GETPRODUCTS:
      if (!action.payload)
        throw new Error("action.payload missing in GETPRODUCTS");
      //   set data from api
      return { ...state, products: action.payload.products || [] };
    case REDUCER_ACTION_TYPE.GETPRODUCT:
      if (!action.payload)
        throw new Error("action.payload missing in GETPRODUCT");
      //   set data from api
      return {
        ...state,
        products: action.payload.product ? [action.payload.product] : [],
      };
    case REDUCER_ACTION_TYPE.GETCATEGORIES:
      if (!action.payload)
        throw new Error("action.payload missing in GETCATEGORIES");
      //   set data from api
      return {
        ...state,
        categories: action.payload.categories || [],
      };
    case REDUCER_ACTION_TYPE.GETCATEGORY:
      if (!action.payload)
        throw new Error("action.payload missing in GETCATEGORY");
      //   set data from api
      return {
        ...state,
        categories: action.payload.category ? [...action.payload.category] : [],
      };
    case REDUCER_ACTION_TYPE.SETSELECTEDCATEGORY:
      if (!action.payload)
        throw new Error("action.payload missing in SETSELECTEDCATEGORY");
      //   set data from api
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory || "",
      };

    default:
      throw new Error("Unidentify reducer action type");
  }
};

const useProductContext = (initProduct: ProductStateType) => {
  const [state, dispatch] = useReducer(reducer, initProduct);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  return {
    products: state.products,
    REDUCER_ACTIONS,
    dispatch,
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  };
};

export type UseProductContextType = ReturnType<typeof useProductContext>;

const initProductContextState: UseProductContextType = {
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  dispatch: () => {},
  products: [],
  categories: [],
  selectedCategory: "All Categories",
};

export const ProductContext = createContext<UseProductContextType>(
  initProductContextState as UseProductContextType
);

const initialProductState: ProductStateType = {
  products: [],
  categories: [],
  selectedCategory: "All Categories",
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const contextValue = useProductContext(initialProductState);
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
