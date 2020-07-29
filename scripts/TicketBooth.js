const contentTarget = document.querySelector(".entry")
const counterContentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
    if (clickEvent.target.id === "fullPackageTicket") {
        const fullPackageTicketEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageTicketEvent)
    }
})

let totalTicketsSold = 0

export const TicketCounter = () => {
    
    counterContentTarget.innerHTML = `<h3>Total tickets purchased: ${totalTicketsSold}</h3>`
}

export const TicketListener = () => {
    
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        totalTicketsSold+= 4
        TicketCounter()                                  
                }) 
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        totalTicketsSold++
        TicketCounter()                                  
                }) 
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        totalTicketsSold++
        TicketCounter()                                  
                }) 
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        totalTicketsSold++
        TicketCounter()                                  
                }) 
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        totalTicketsSold++
        TicketCounter()                                  
                }) 
}







export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

