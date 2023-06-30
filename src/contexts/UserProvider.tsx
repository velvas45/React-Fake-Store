import { useReducer, ReactElement, useMemo, createContext } from "react";

export type UserType = {
  id?: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

type UserStateType = {
  isLogin: boolean;
  user: UserType;
};

const REDUCER_ACTION_TYPE = {
  LOGIN: "LOGIN",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
export type ReducerAction = {
  type: string;
  payload?: UserType;
};

const reducer = (
  state: UserStateType,
  action: ReducerAction
): UserStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOGIN:
      if (!action.payload) throw new Error("action.payload missing in LOGIN");
      //   set data from api
      return { ...state, user: action.payload, isLogin: !!action.payload };

    default:
      throw new Error("Unidentify reducer action type");
  }
};

const useUserContext = (initProduct: UserStateType) => {
  const [state, dispatch] = useReducer(reducer, initProduct);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  return {
    user: state.user,
    REDUCER_ACTIONS,
    dispatch,
    islogin: !!state.user,
  };
};

export type UseUserContextType = ReturnType<typeof useUserContext>;

const initUserContextState: UseUserContextType = {
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  dispatch: () => {},
  user: [],
  isLogin: false,
};

export const UserContext = createContext<UseUserContextType>(
  initUserContextState as UseUserContextType
);

const initialProductState: UserStateType = {
  isLogin: false,
  user: [],
};

export const UserProvider = ({ children }: ChildrenType): ReactElement => {
  const contextValue = useUserContext(initialProductState);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
