import React from "react";

const useAPI = () => {
  let randomPage = Math.floor(Math.random() * 41);
  const API = `https://rickandmortyapi.com/api/character?page=${randomPage}`;
  const [characters, setCharacters] = React.useState([]);
  const [recall, setRecall] = React.useState(false);


  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API);
        const data = await res.json();

        if (res.status !== 200) {
          console.log("something is wrong with the API");
        } else {
          gameSet(data.results);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
    setRecall(false);
  }, [recall]);

  const gameSet = (chars) => {
    let choosenCards = [];
    let pairs = 10; //difficulty

    while (pairs) {
      let randomChar = chars[Math.floor(Math.random() * chars.length)].image;
      if (choosenCards.includes(randomChar)) {
        continue;
      }
      choosenCards.push(randomChar);
      pairs--;
    }

    //suffle

    let suffledCards = [...choosenCards, ...choosenCards]
      .map((src) => ({
        src,
        matched: false,
        id: Math.random(),
      }))
      .sort(() => Math.random() - 0.5);

    setCharacters(suffledCards);
    // }
  };

  return { characters, setRecall, setCharacters };
};

export { useAPI };
