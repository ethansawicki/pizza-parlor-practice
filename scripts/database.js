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
order.id = newId
orders.push(order)
document.dispatchEvent(new CustomEvent("stateChanged"))
}