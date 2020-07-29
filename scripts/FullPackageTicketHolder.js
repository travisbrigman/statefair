//const contentTarget = document.querySelector(".sideshow")
const rideContentTarget = document.querySelector(".rides")
const foodContentTarget = document.querySelector(".food")
const gameContentTarget = document.querySelector(".games")
const sideshowContentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        rideContentTarget.innerHTML +=  `<div class="person bigSpender"> </div>`
        foodContentTarget.innerHTML +=  `<div class="person bigSpender"> </div>`
        gameContentTarget.innerHTML +=  `<div class="person bigSpender"> </div>`
        sideshowContentTarget.innerHTML +=  `<div class="person bigSpender"> </div>`
                                    
    }) 

}

