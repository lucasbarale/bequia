import React from "react";

function CommonButton(props){

    return(
        <a className={"btn btn-"+props.color} target="_blank" rel="nofollow" href={props.href}>{props.texto}</a>
    )
}

export default CommonButton;