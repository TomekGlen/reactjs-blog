import React from "react";

function List(props){
    return(
      <li><a className="list-overflow" href="http://www.google.pl" target="_blank" rel="noopener noreferrer">{props.title}</a></li>
    )
}
export default List