import { getFish } from "./fishData.js"

export const fishList = () => {

    const allFishes = getFish();

    const DOMLocation = document.querySelector("#fishList");
    console.log("fish list reference", DOMLocation);
}
