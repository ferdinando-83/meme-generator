import React, {useState, useEffect} from "react";
import MemeGeneratorView from "./MemeGeneratorView";
import {useFetch} from "../../utilities/hooks";

function MemeGeneratorContainer() {
  const [state, setState] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    allMemeImages: []
  });

  const [data, loading] = useFetch("https://api.imgflip.com/get_memes");

  useEffect(() => {
    setState({...state, allMemeImages: data});
  }, [data]);

  useEffect(() => {
    !loading && setState({...state, randomImage: state.allMemeImages[0].url});
  }, [loading]);

  function handleChange(event) {
    const {name, value} = event.target;
    setState({...state, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * state.allMemeImages.length);
    const randMemeImg = state.allMemeImages[randNum].url;
    setState({...state, randomImage: randMemeImg});
  }

  return (
    <div>
      <MemeGeneratorView
        image={state.randomImage}
        topText={state.topText}
        bottomText={state.bottomText}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default MemeGeneratorContainer;