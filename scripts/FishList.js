import { getFish } from "./fishData.js";
import { Fish } from "./Fish.js";
// import { mostHolyFish } from "./fishFilter";
// import { soldierFish } from "./fishFilter";
// import { unworthyFish } from "./fishFilter";


export const fishList = () => {

    const allFishes = getFish()
    const DOMLocation = document.querySelector("#fishList");
    let fishHTMLRepresentations = "";
    for (const oneThingFromTheSea of allFishes) {
        fishHTMLRepresentations += Fish(oneThingFromTheSea);
    }

    DOMLocation.innerHTML += fishHTMLRepresentations;

}


