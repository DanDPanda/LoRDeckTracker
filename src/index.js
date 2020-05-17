import fs from "fs";
import { getDeck } from "./utils.js";

const getDeckInfo = async () => {
    const LoRData = fs.readFileSync("./json/LoR_Data.json");
    const LoRDataObjects = JSON.parse(LoRData);
    const currentDeck = await getDeck();

    return Object.keys(currentDeck).map((currentCardCode) => {
        const LoRDataObject = LoRDataObjects.find(
            ({ cardCode }) => cardCode === currentCardCode
        );

        return {
            name: LoRDataObject.name,
            amount: currentDeck[currentCardCode],
        };
    });
};

const main = async () => {
    const deckInfo = await getDeckInfo();
    console.log(deckInfo);
};

main();
