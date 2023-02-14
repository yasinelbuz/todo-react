import style from "./addTodoForm.module.scss";
import AddTodoInput from "./addTodoInput";
import FilterSelectBox from "./filterSelectBox";

const AddTodoForm = () => {
	return (
		<div className={style.containerAddForm}>
			<AddTodoInput />
			<FilterSelectBox />
		</div>
	);
};

export default AddTodoForm;
