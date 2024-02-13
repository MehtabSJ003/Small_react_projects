import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./pizzaData";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Always keep conditional rendering value boolean because a number or a string would be still rendered on the screen */}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our store oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza, index) => (
              <Pizza pizzaObj={pizza} key={index} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// Destructuring Props
function Pizza({ pizzaObj }) {
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>Sorry, we are closed now. We will open at {openHour}:00.</p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We are currently open!");
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
