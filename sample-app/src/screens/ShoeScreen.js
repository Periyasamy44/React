import React from "react";
import { data2 } from "../component/Product";


export default function ShoeScreen() {
  return (
    <div className="row center">
      {data2.products.map((D) => {
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