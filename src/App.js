


import React, { useState } from "react";
import './App.css';
import remove from './images/delete.png';
function App() {
  const [data, setData] = useState([]);
  const [addValue, setAddValue] = useState('');
  const [completed, setCompleted] = useState([]);

  const inputChange = (event) => {
    setAddValue(event.target.value);
  };

  const handleAdd = () => {
    if (!addValue.trim()) {
      alert("Enter a task");
      return;
    }
    setData([...data, addValue]);
    setAddValue("");
    setCompleted([...completed, false]); // Initialize completed state for the new item
  };

  const handleRemove = (index) => {
    const newData = [...data];
    const newCompleted = [...completed];
    newData.splice(index, 1);
    newCompleted.splice(index, 1);
    setData(newData);
    setCompleted(newCompleted);
  };

  const toggleComplete = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };
  // set chatgpt reset
  // const handleReset = () => {
  //   setData([]);
  //   setCompleted([]);
  // };
  const handleReset = () => {
    const container = document.querySelector('.datalist');
    container.classList.add('is-resetting');
    
    setTimeout(() => {
      setData([]);
      setCompleted([]);
      container.classList.remove('is-resetting');
    }, 1000); // Match the duration with the animation duration
  };
  

  return (
    <div className="container">
     
       
      
      <div className="App">
        <h1 className="Heading">My To Do List</h1>
        <div className="inputfield">
          <input type="text" placeholder="Enter task" value={addValue} onChange={inputChange} />
          <button className="savebtn" onClick={handleAdd}>Add</button>
          <button className="resetbtn" onClick={handleReset}>Delete All</button>
        </div>
        <div className="datalist">
          <ol>
            
            {data.map((task, index) => (
              
              <li key={index}>
               
                <input type="checkbox" className="donebtn" onClick={() => toggleComplete(index)}/>
                {completed[index] ? <del>{task}</del> : task}
                <button className="removebtn" onClick={() => handleRemove(index)}> < img className="remove" src={remove} alt=""/></button>
               
              </li>
              
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;



