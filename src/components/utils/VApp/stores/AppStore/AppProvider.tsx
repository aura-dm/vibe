import { ReactNode, createContext, useReducer } from "react";

export interface ModalOptions {
  content: ReactNode;
  id: string;
}

export enum AppActionType {
  ADD_MODAL = "addModal",
  REMOVE_MODAL = "removeModal",
}

interface AppAction {
  payload: ModalOptions;
  type: AppActionType;
}

interface InitialState {
  modals: ModalOptions[];
}

const initialState = { modals: [] };

export const AppContext = createContext<{
  dispatch: React.Dispatch<any>;
  state: InitialState;
}>({
  dispatch: () => null,
  state: initialState,
});

const mainReducer = (state: InitialState, action: AppAction): InitialState => {
  switch (action.type) {
    case AppActionType.ADD_MODAL:
      return { modals: [...state.modals, action.payload] };
    case AppActionType.REMOVE_MODAL:
      return {
        modals: state.modals.filter((modal) => {
          return modal.id !== action.payload.id;
        }),
      };
    default:
      throw new Error();
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
