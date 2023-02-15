import style from "./addTodoForm.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../../store/todoSlice";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { GrFormAdd } from "react-icons/gr";

const AddTodoInput = () => {
	const [todoInput, setTodoInput] = useState<string>("");
	const todos = useSelector((state: RootState) => state.todos.todos);
	const dispatch = useDispatch();

	const addTodo = (e: React.MouseEvent) => {
		e.preventDefault();
		if (todoInput.length > 2) {
			dispatch(setTodos(todoInput));
		}
	};

	useEffect(() => {
		setTodoInput("");
	}, [todos]);

	return (
		<div className={style.addTodoBox}>
			<form>
				<input
					type='text'
					placeholder='Add To Do'
					value={todoInput}
					onChange={(e) => setTodoInput(e.target.value)}
				/>
				<button onClick={(e) => addTodo(e)}>
					<GrFormAdd size='30px' />
				</button>
			</form>
		</div>
	);
};

export default AddTodoInput;
