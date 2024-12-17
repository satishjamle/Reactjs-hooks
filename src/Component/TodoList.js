import React, { useState } from "react";
import { ItemList } from "./ItemList";

export const TodoList = () => {
  const [inputlist, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("")
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems)=>{
        return oldItems.filter((arrElement,index)=>{
            return index !== id;
        })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputlist} />
          <button onClick={ListOfItem}>+</button>
          <ol>
            {/* <li> {inputlist}</li> */}
            {items.map((itemsval,index) => {
              return (
              <ItemList
               key={index} 
               id={index}
                text ={itemsval}
                onSelect ={deleteItems}
                />
              );
               
            })}
          </ol>
        </div>
      </div>
        </>
  );
};
