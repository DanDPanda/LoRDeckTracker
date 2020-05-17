import fetch from "node-fetch";

export const getDeck = async () => {
    const response = await fetch("http://127.0.0.1:21337/static-decklist");

    const json = await response.json();

    return json.CardsInDeck;
};
