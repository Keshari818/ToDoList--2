import AppName from "./Components/AppName";
import AppToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./Index.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newToDoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newToDoItems = todoItems.filter((item) => item.name != todoItemName);
    setToDoItems(newToDoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppToDo onNewitem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItems}
      ></ToDoItems>
    </center>
  );
}

export default App;
