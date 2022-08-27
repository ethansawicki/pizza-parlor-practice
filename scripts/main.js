import {getOrders, addNewOrder} from './database.js'

document.addEventListener("stateChanged", event => {
    console.log(getOrders())
  })

document.getElementById("app").innerHTML = `
<h1>Peanut's Pizza Parlor</h1>
<div>
  <h3>Please make your pizza</h3>
  <div class="pizzaForm">
    <div class="crust">
      <p>Pick your crust</p>
      <label for="thinCrust">Thin</label>
      <input id="thinCrust" name="crust" type="radio" value="thin" />
      <label for="handTossedCrust">Hand Tossed</label>
      <input id="handTossedCrust" name="crust" type="radio" value="HandTossed" />
      <label for="handTossedCrust">Stuffed</label>
      <input id="stuffed" name="crust" type="radio" value="stuffed" />
      </div>
      <div class="toppings">
        <p>Pick your Toppings (Select all that apply)</p>
        <ul>
          <li>
            <input id="pepperoni" name="toppings" type="checkbox" value="pepperoni" />
            <label for="pepperoni">Pepperoni</label>
          </li>
          <li>
            <input id="Sausage" name="toppings" type="checkbox" value="Sausage" />
            <label for="Sausage">Sausage</label>
          </li>
          <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
          </li>
          <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
        </ul>
    </div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Order Pizza</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders()
  let completedOrders = ''
  const orderElement = document.querySelector('#orders')
  // Add logic here to put the orders on the DOM
  for(const order of orders) {
    completedOrders += `<ul>`
    completedOrders += `<li>Order#: ${order.id}</li>`
    completedOrders += `<li>Crust Type: ${order.crust}</li>`
    completedOrders += `<li>Toppings: ${order.toppings}</li>`
    completedOrders += `<li>Instructions: ${order.instructions}</li>`
    completedOrders += `</ul>`
  }
   orderElement.innerHTML = completedOrders
   return orderElement
};

displayOrders()

document.addEventListener('click', (event) => {
    if (event.target.id === "submitOrder") {
        addNewOrder()
    }
})