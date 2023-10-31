import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients:
      "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients:
      "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients:
      "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  }
];

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
  // const style = { color: "red", fontSize: "48px" };

  return (
    // <h1 style={{ color: "red", fontSize: "48px" }}>
    // <h1 style={style}>Fast React Pizza Co.</h1>

    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => {
            return <Pizza pizzaObj={pizza} key={index} />;
          })}
        </ul>
      )} */}

      {/* ternary operator */}
      {pizzaData.length > 0 ? (
        // 2 or more elements without a parent here.
        // If you need a key you can use <React.Fragment key={key}> </React.Fragment>
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to
            choose from. All from our stone oven, all
            organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
              return <Pizza pizzaObj={pizza} key={index} />;
            })}
          </ul>
        </>
      ) : (
        <p>
          We're still working on our menu. Please come back
          later :)
        </p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

// Destructuring needs to be the exact name passed by
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li
      className={`pizza ${
        pizzaObj.soldOut ? "sold-out" : ""
      }`}
    >
      <img src={pizzaObj.photoName} alt="Pizza Spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open");
  // } else {
  //   alert("Sorry we're closed.");
  // }

  console.log(hour);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>
          We're happy to welcome you between 12:00 and 22:00
        </p>
      )}
    </footer>
  );

  function Order() {
    return (
      <div className="order">
        <h3 style={{ textAlign: "center" }}>
          {new Date().toLocaleTimeString()}
        </h3>
        <p></p>
        <button className="btn">Order</button>
      </div>
    );
  }

  // return React.createElement(
  //   "footer",
  //   null,
  //   "We're currently open"
  // );
}

// React v18
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
