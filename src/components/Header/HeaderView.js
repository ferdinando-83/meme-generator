import React from "react";
import "./Header.css";

function HeaderView(props) {
  return (
    <header>
      <img src={props.image} alt={"Problem?"}/>
      <p>Meme Generator</p>
    </header>
  )
}

export default HeaderView;