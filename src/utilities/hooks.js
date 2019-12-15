import {useState, useEffect} from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);

    return await response.json();
  }

  useEffect(() => {
    fetchUrl().then((json) => {
      setData(json.data.memes);
      setLoading(false);
    });
  }, []);

  return [data, loading];
}

export {useFetch};