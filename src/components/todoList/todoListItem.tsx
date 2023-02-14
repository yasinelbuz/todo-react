import style from "./todolist.module.scss";
const ToDoListItem = () => {
	return (
		<div className={style.listItem}>
			<span>Task 1</span>
			<div className='actionsBtn'>
				<button>Update</button>
				<button>Tamam</button>
				<button>Sil</button>
			</div>
		</div>
	);
};

export default ToDoListItem;
