import React, { useEffect, useState } from "react";
import DraggableBentoGrid from "../components/DraggableBentoGrid";
import Navbar from "../components/Navbar";
import { ALL, initialGrid } from "../constants";

const Home = () => {
  const [cards, setCards] = useState(initialGrid);
  const [category, setCategory] = useState(ALL);

  const filterCards = (category) => {
    if (category === ALL) {
      setCards(initialGrid);
    } else {
      const filteredCards = initialGrid.filter(
        (card) => card.category === category
      );

      const unfilteredCards = initialGrid.filter(
        (card) => card.category !== category
      );

      setCards([...filteredCards, ...unfilteredCards]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        selectedCategory={category}
        setCategory={setCategory}
        filterCards={filterCards}
      />
      <DraggableBentoGrid
        cards={cards}
        setCards={setCards}
        category={category}
      />
    </>
  );
};

export default Home;
