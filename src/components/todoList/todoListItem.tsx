import { useDispatch, useSelector } from "react-redux";
import style from "./todolist.module.scss";
import { setDeleteTodo, setIsComplated, setIsModalOpen } from "../../store/todoSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";
import { RootState } from "../../store/store";

type Props = {
	todo: { id?: number; todo?: string; isComplated?: boolean };
};

const ToDoListItem: React.FC<Props> = ({ todo }) => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector((state: RootState) => state.todos.isModalOpen);

	const deleteTodo = () => {
		let onay = confirm("Are you sure you want to delete Todo?");
		if (onay) dispatch(setDeleteTodo(todo.id));
	};

	const update = () => {
		dispatch(setIsModalOpen(!isModalOpen));
	};

	return (
		<>
			{
				<div className={style.listItem}>
					<span style={todo?.isComplated ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
						{todo?.todo}
					</span>
					<div className={style.actionsBtn}>
						<button className={style.updateBtn} onClick={() => update()}>
							<RxUpdate />
						</button>
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
