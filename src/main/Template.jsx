import React, { useState } from "react";
import { FcLeftDown } from "react-icons/fc";
import { FaShoppingBasket } from "react-icons/fa";

export default function Template(prop) {
  return (
    <div className="container">
      <div className="basket-icon">
        {prop.icon}
        <span className="span"></span>
      </div>
      <div id="left-item">
        <div className="h2andh3">
          <h3>{prop.title}</h3>
          <h2>
            {prop.id === 1 || prop.id === 2 ? `$${prop.count}` : prop.count}
          </h2>
        </div>
        <span id="contain-botton-left">
          {prop.percent >= 0 ? (
            <div id="icon-upp">{prop.upp}</div>
          ) : (
            <div id="icon-down">{prop.down}</div>
          )}
          <div>
            <h6 id="h6-down">{prop.percent}%</h6>
            <h6>{prop.duration}</h6>
          </div>
        </span>
      </div>
    </div>
  );
}
