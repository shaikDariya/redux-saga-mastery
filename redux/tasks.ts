import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  name: string;
  status: string;
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [{ id: 1, name: "test", status: "Todo" }] as Task[],
  },
  reducers: {
    createTask: (draft, action: PayloadAction<Task>) => {
      draft.tasks.push(action.payload);
    },
  },
});

export const { createTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
