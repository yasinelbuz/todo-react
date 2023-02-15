import { useDispatch, useSelector } from "react-redux";
import { setFiltreTodo } from "./../../store/todoSlice";
import style from "./addTodoForm.module.scss";

const FilterSelectBox = () => {
	const dispatch = useDispatch();

	return (
		<select className={style.filter} onChange={(e) => dispatch(setFiltreTodo(e.target.value))}>
			<option value='all'>All</option>
			<option value='complated'>Complated</option>
			<option value='notComplated'>Not Complated</option>
		</select>
	);
};

export default FilterSelectBox;
