// orders.js
const orders = [
    {
      id: 1,
      crust: "Hand",
      toppings: ["pepperoni", "green pepper"],
      instructions: "extra cheese"
    },
    {
      id: 2,
      crust: "Thin",
      toppings: ["Black Olives", "green pepper"],
      instructions: "half green peppers"
    }
  ]
  
export const getOrders = () => {
return orders.map(order => {return {...order}})
}

const getNewOrderId = () => {
let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
return highestOrderId + 1
}

export const addNewOrder = (order) => {
const newId = getNewOrderId()
// Add logic to give the order the property id, which is equal to newId
    // Add logic to add the order object to the orders array

    // The below line creates and dispatches a new custom event titled "stateChanged".
    // We will still need to add a listener for this event.

order = {}
const toppingsArray = []
// const toppings = toppingsElements.forEach(toppingElement=> {
//     toppingsArray.push(toppingElement.value)
//   });
order.id = newId
order.crust = 
//newOrder.toppings = toppingsArray
order.instructions = document.getElementById('specialInstructions')?.value
orders.push(order)
document.dispatchEvent(new CustomEvent("stateChanged"))
}