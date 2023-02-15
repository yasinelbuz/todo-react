import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export interface CounterState {
	todos: object[];
	todofiltre: string;
}

type todoType = {
	id?: string;
	todo?: string;
	isComplated?: boolean;
};

const todos: todoType[] = [
	{ id: uuid(), todo: "task 1", isComplated: false },
	{ id: uuid(), todo: "task 2", isComplated: false },
	{ id: uuid(), todo: "task 3", isComplated: false },
];

const initialState: CounterState = {
	todos: todos,
	todofiltre: "notComplated",
};

export const counterSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTodos: (state, action) => {
			let addTodo = { id: uuid(), todo: action.payload, isComplated: false };
			state.todos = [...state.todos, addTodo];
		},
		setFiltreTodo: (state, action) => {
			state.todofiltre = action.payload;
		},
		setDeleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo: todoType) => todo.id !== action.payload);
		},
		setIsComplated: (state, action) => {
			const newArray = state.todos.map((todo: todoType): object => {
				if (todo.id === action.payload) {
					return { id: todo.id, todo: todo.todo, isComplated: !todo.isComplated };
				} else {
					return todo;
				}
			});

			state.todos = newArray;
		},
	},
});

export const { setTodos, setFiltreTodo, setDeleteTodo, setIsComplated } = counterSlice.actions;
export default counterSlice.reducer;
