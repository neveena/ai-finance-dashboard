import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type Goal = {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
};

type Expense = {
  id: string;
  description: string;
  amount: number;
  goalId: string;
};

type State = {
  expenses: Expense[];
  goals: Goal[];
  insight: string | null;
};

type Action =
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'DELETE_EXPENSE'; payload: string }
  | { type: 'ADD_GOAL'; payload: Goal }
  | { type: 'SET_INSIGHT'; payload: string };

const initialState: State = {
  expenses: [],
  goals: [],
  insight: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        goals: state.goals.map((goal) =>
          goal.id === action.payload.goalId
            ? { ...goal, currentAmount: goal.currentAmount + action.payload.amount }
            : goal
        ),
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((exp) => exp.id !== action.payload),
      };
    case 'ADD_GOAL':
      return { ...state, goals: [...state.goals, action.payload] };
    case 'SET_INSIGHT':
      return { ...state, insight: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
