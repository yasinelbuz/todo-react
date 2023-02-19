import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import ToDoListItem from "./todoListItem";
import style from "./todolist.module.scss";
import { useSelector } from "react-redux";

type todoType = {
	id?: number;
	todo?: string;
	isComplated?: boolean;
};

const ToDoList = () => {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const filter = useSelector((state: RootState) => state.todos.todofiltre);
	const [selectFilterTodo, setSelectFilterTodo] = useState(filter);

	const filteredTasks = () => {
		if (selectFilterTodo === "complated") {
			return todos.filter((todo: todoType) => todo.isComplated);
		} else if (selectFilterTodo === "notComplated") {
			return todos.filter((task: todoType) => !task.isComplated);
		} else {
			return todos;
		}
	};

	useEffect(() => {
		setSelectFilterTodo(filter);
	}, [filter]);

	return (
		<>
			<div className={style["todolist-container"]}>
				{filteredTasks()?.length ? (
					filteredTasks()?.map((todo: todoType) => <ToDoListItem todo={todo} key={todo.id} />)
				) : selectFilterTodo == "all" ? (
					<h1 className={style.emptyState}>Currently, there is nothing in your Task.</h1>
				) : selectFilterTodo == "complated" ? (
					<h1 className={style.emptyState}>There are no completed quests.</h1>
				) : (
					<h1 className={style.emptyState}>Congrats on doing all your Tasks.</h1>
				)}
			</div>
		</>
	);
};

export default ToDoList;
