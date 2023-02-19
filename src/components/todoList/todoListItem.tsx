import { useDispatch } from "react-redux";
import style from "./todolist.module.scss";
import { setDeleteTodo, setIsComplated, setUpdate } from "../../store/todoSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

type Props = {
	todo: { id?: number; todo?: string; isComplated?: boolean };
};

const ToDoListItem: React.FC<Props> = ({ todo }) => {
	const dispatch = useDispatch();
	const [updateState, setUpdateState] = useState(false);
	const [input, setInput] = useState("");

	const deleteTodo = () => {
		let onay = confirm("Are you sure you want to delete Todo?");
		if (onay) dispatch(setDeleteTodo(todo.id));
	};

	const updateTodo = (id?: number, input?: string) => {
		if (!id) return;
		dispatch(setUpdate({ id, input }));
		setUpdateState(false);
	};

	return (
		<>
			{
				<div className={style.listItem}>
					<div style={todo?.isComplated ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
						{updateState ? (
							<input
								type='text'
								value={input}
								className={style.updateInput}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
							/>
						) : (
							todo?.todo
						)}
					</div>
					<div className={style.actionsBtn}>
						<div className={style.updateBtn}>
							{updateState ? (
								<button onClick={() => updateTodo(todo.id, input)}>Update Done</button>
							) : (
								<button onClick={() => setUpdateState(true)}>Update</button>
							)}
						</div>
						<button className={style.ok} onClick={() => dispatch(setIsComplated(todo.id))}>
							<TiTick style={{ color: "white" }} />
						</button>
						<button className={style.delete} onClick={() => deleteTodo()}>
							<AiTwotoneDelete style={{ color: "white" }} />
						</button>
					</div>
				</div>
			}
		</>
	);
};

export default ToDoListItem;
