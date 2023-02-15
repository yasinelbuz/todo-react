import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
	todos: object[];
	todofiltre: string;
}

type todoType = {
	id?: number;
	todo?: string;
	isComplated?: boolean;
};

const todos: todoType[] = [
	{ id: 0, todo: "task 1", isComplated: false },
	{ id: 1, todo: "task 2", isComplated: false },
	{ id: 2, todo: "task 3", isComplated: false },
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
			let addTodo = { id: state.todos.length, todo: action.payload, isComplated: false };
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
