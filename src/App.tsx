import AddTodoForm from "./components/addTodoForm";
import ToDoList from "./components/todoList";
import "./styles/global.scss";

function App() {
	return (
		<div className='container'>
			<h1 className='todo-title'>To-Do List</h1>
			<AddTodoForm />
			<ToDoList />
		</div>
	);
}

export default App;
