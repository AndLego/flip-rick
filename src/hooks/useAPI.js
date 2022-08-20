import React from "react";

const useAPI = () => {
  const API = "https://rickandmortyapi.com/api/character";
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
    let choosenCharacters = [];

    for (let i = 0; i < 10; i++) {
      let randomCharacter =
        chars[Math.floor(Math.random() * chars.length)].image;

      if (!choosenCharacters.includes(randomCharacter)) {
        choosenCharacters.push(randomCharacter, randomCharacter);
      }
    }

    if (choosenCharacters.length < 20) {
      gameSet(chars);
    } else {
      let shuffledCharacters = choosenCharacters.sort(function () {
        return Math.random() - 0.5;
      });

      const deck = shuffledCharacters.map((src) => ({
        src,
        matched: false,
        index: shuffledCharacters.indexOf(src),
      }));

      setCharacters(deck);
    }
  };

  return { characters, setRecall, setCharacters };
};

export { useAPI };
