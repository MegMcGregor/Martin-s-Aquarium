
import { fishCollection } from "./fishData.js";

export const mostHolyFish = () => {
    const holyFish = []

    for (const oneFish of fishCollection) {
        if (oneFish.inches % 3 === 0) {
            holyFish.push(oneFish)
        }
    }
    return holyFish
};


export const soldierFish = () => {
    const soldierFish = []

    for (const oneFish of fishCollection) {
        if (oneFish.inches % 5 === 0) {
            soldierFish.push(oneFish)
        }
    }
    return soldiers
}


// export const unworthyFish = () => {
//     const unworthyFish = []

//     for (const oneFish of unworthyFish) {
//         if (oneFish % 3 || 5 !== 0) {
//                 unworthyFish.push(unworthyFish)
//             }
//         }
//         return regularFish
// }