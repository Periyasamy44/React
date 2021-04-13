import React from "react";

export default function Help() {
  return (
    <div className="row">
      <div className="card-body ">
        <h2>Contact</h2>
        <a href="/">Email us +31 (0) 202 615 614</a>
      </div>
      <div className="card-body">
      <h2>Information</h2><br/>
        <a href="/">Shipping Information</a><br/>
        <a href="/">Returns & Exchanges Size</a><br/>
        <a href="/">guide Wholesale & Showroom</a><br/>
      </div>
      <div className="card-body">
        <h2>Frequnently asked questions</h2><br/>
        <a href="/">Do I need an account to place an order?</a><br/>
        <a href="/">How do I return or exchange?</a><br/>
        <a href="/">Do you ship to my country?</a><br/>
        <a href="/">How much does the delivery cost?</a>
      </div>
    </div>
  );
}
