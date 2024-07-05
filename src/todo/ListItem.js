import React from "react";
export default function ListItem(props){
    return(
        <div>
              <p> {props.name}</p>
              <button>Mark as done</button>
              <button>Delete</button>

        </div>
    );
    
}