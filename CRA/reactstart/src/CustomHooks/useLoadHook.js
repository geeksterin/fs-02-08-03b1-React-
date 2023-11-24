import { useEffect, useState } from "react";

function useLoadHook(url) {
  console.log(url);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setIsLoading(false);
      });
  }, []);

  return [isLoading, data];
}

export default useLoadHook;
