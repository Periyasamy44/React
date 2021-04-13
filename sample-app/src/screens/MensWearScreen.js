import React from "react";
import {data} from "../component/Product";

export default function MensWearScreen() {
  return (
    <div className="row center">
      {data.product.map((D) => {
        return (
          <>
            <div className="card">
              <img src={D.image} alt={D.name} className="large"></img>
              <div className="card-body">
                <h2>{D.name}</h2>
                <div className="price"> ${D.price} </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}