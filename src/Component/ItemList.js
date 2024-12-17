import React from "react";

export const ItemList = (props) => {
 
  
  return (
    <>
      <div className="item_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={()=>{
            props.onSelect(props.id)
          }}
        />
        <li>{props.text}</li>;
      </div>
    </>
  );
};
