import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";

const Semaforo = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === "red") {
        setColor("green");
      } else if (color === "green") {
        setColor("yellow");
      } else if (color === "yellow") {
        setColor("red");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div>
      <div className="container"></div>
      <div className="semaforo">
        <button
          onClick={() => setColor("red")}
          className={`rojo ${color === "red" ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setColor("yellow")}
          className={`amarillo ${color === "yellow" ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setColor("green")}
          className={`verde ${color === "green" ? "active" : ""}`}
        ></button>
      </div>
    </div>
  );
};

export default Semaforo;
