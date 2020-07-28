const contentTarget = document.querySelector(".attractions")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person rider"> </div> 
                                    <div class="person eater"> </div> 
                                    <div class="person player"> </div> 
                                    <div class="person gawker"> </div> 
                                    `
    }) 

}

