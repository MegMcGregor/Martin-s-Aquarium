import { getFish } from "./fishData.js";
import { Fish } from "./Fish.js";
import { mostHolyFish } from "./fishFilter";
import { soldierFish } from "./fishFilter";
import { unworthyFish } from "./fishFilter";


export const fishList = () => {
    const holyFishes = mostHolyFish();
    addFishToDom(holyFishes);

    const soldierFishes = soldierFish();
    addFishToDom(soldierFishes);

    const unworthyFishes = unworthyFish();
    addFishToDom(unworthyFishes)
    // const allFishes = holyFishes.concat(soldierFishes, unworthyFishes);
}

const addFishToDom = (fishArray) => {

    const DOMLocation = document.querySelector("#fishList");
    let fishHTMLRepresentations = "";

    for (const oneThingFromTheSea of fishArray) {

        fishHTMLRepresentations += Fish(oneThingFromTheSea);
    }

    DOMLocation.innerHTML += fishHTMLRepresentations;

}


