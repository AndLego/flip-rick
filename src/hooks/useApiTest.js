import React from "react";

const useApi = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        if (res.status !== 200) {
          console.log("something is wrong with the API");
        } else {
          setData(data.results);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  return { loading, data };
};

export { useApi };
