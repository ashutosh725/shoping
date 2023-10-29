"use client"
import store from "./Store";
import { Provider } from "react-redux";

const CustomProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default CustomProvider;

