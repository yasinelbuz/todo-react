import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export interface CounterState {
	todos: object[];
	todofiltre: string;
	isModalOpen: boolean;
}

type todoType = {
	id?: string;
	todo?: string;
	isComplated?: boolean;
};

const todos: todoType[] = [
	{ id: "1", todo: "task 1", isComplated: false },
	{ id: "2", todo: "task 2", isComplated: false },
	{ id: "3", todo: "task 3", isComplated: false },
];

const initialState: CounterState = {
	todos: todos,
	todofiltre: "all",
	isModalOpen: false,
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

		setIsModalOpen: (state, action) => {
			state.isModalOpen = action.payload;
		},
	},
});

export const { setTodos, setFiltreTodo, setDeleteTodo, setIsComplated, setIsModalOpen } = counterSlice.actions;
export default counterSlice.reducer;
