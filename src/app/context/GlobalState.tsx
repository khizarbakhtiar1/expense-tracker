"use client";
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transaction: [],
};

// Global Context
export const GlobalContext = createContext<{
  transaction: { id: number; text: string; amount: number }[];
  deleteTransaction: (id: any) => void;
  addTransaction: (transaction: any) => void; // Add the missing property
}>({
  transaction: [],
  deleteTransaction: () => {},
  addTransaction: () => {}, // Provide a default empty function
});

// Provider Component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: any) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction: any) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction, // Include the addTransaction function in the context value
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
