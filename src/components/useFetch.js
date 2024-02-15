import { useState, useEffect } from "react";
export default function (url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("SERVER NOT FOUND");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, error };
}
