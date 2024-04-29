"use client";

import { createTask } from "@/redux/tasks";
import { useDispatch, useSelector } from "react-redux";

export default function Tasks() {
  const tasks = useSelector((s) => s.tasks.tasks);
  const dispatch = useDispatch();
  console.log(tasks);
  return (
    <div>
      <button
        onClick={() =>
          dispatch(createTask({ id: 2, name: "Test2", status: "Todo" }))
        }
      >
        Add
      </button>
    </div>
  );
}
