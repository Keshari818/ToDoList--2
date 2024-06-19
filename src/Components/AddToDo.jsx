import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";

function AppToDo({ onNewitem }) {
  const [todoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewitem(todoName, dueDate);
    setDueDate("");
    setToDoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handelAddButtonClicked}
        >
          <IoBagAddOutline />
        </button>
      </div>
    </div>
  );
}

export default AppToDo;
