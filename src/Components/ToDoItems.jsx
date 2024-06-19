import ToDOItem from "./ToDoItem";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items.container">
      {todoItems.map((items) => (
        <ToDOItem
          key={items.name}
          todoDate={items.dueDate}
          todoName={items.name}
          onDeleteClick={onDeleteClick}
        ></ToDOItem>
      ))}
    </div>
  );
};
export default ToDoItems;
