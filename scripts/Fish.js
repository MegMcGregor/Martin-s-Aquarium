export const Fish = (fishObj) => {
    return (
        `<article class="fish-card">
            <div><img class="fish-image" src="images/${fishObj.image}" /></div>
            <h3 class="fish-name">${fishObj.name}</h3>
            <ul>
                <li class="fish-details">${fishObj.species}</li>
                <li class="fish-details">${fishObj.inches}</li>
                <li class="fish-details">${fishObj.harvestLocation}</li>
                <li class="fish-details">${fishObj.diet}</li>
            </ul>
        </article>`
    )

}
