import { getFish } from "./fishData.js";
import { Fish } from "./Fish.js";

export const fishList = () => {

    const allFishes = getFish();

    const DOMLocation = document.querySelector("#fishList");
    console.log("fish list reference", DOMLocation);

    let fishHTMLRepresentations = "";

    for (const oneThingFromTheSea of allFishes) {
        fishHTMLRepresentations += Fish(oneThingFromTheSea);
        console.log(fishHTMLRepresentations);
    }

}

