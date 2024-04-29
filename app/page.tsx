"use client";
import Tasks from "@/components/Tasks";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
