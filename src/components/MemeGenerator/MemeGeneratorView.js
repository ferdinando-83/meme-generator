import React from "react";
import "./MemeGenerator.css"

function MemeGeneratorView(props) {
  return (
    <div>
      <form className={"meme-form"} onSubmit={props.onSubmit}>
        <input
          type={"text"}
          name={"topText"}
          placeholder={"Top Text"}
          value={props.topText}
          onChange={props.onChange}
        />

        <input
          type={"text"}
          name={"bottomText"}
          placeholder={"Bottom Text"}
          value={props.bottomText}
          onChange={props.onChange}
        />

        <button>Next Image</button>
      </form>
      <div className={"meme"}>
        <img src={props.image} alt={""}/>
        <h2 className={"top"}>{props.topText}</h2>
        <h2 className={"bottom"}>{props.bottomText}</h2>
      </div>
    </div>
  )
}

export default MemeGeneratorView;