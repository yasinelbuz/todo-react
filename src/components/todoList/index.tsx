import ToDoListItem from "./todoListItem";
import style from "./todolist.module.scss";

const ToDoList = () => {
	return (
		<div className={style["todolist-container"]}>
			<ToDoListItem />
		</div>
	);
};

export default ToDoList;
