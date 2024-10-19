import React from "react";
import UnitpricedetailsIndividual from "./UnitpricedetailsIndividual";

const Unitpricedetails = () => {
  const billItems = [
    { billName: "Bill Name Here", amount: 1000, discount: 10 },
    { billName: "Bill Name Here", amount: 1000, discount: 10 },
    { billName: "Bill Name Here", amount: 1000 },
    { billName: "Bill Name Here", amount: 1000 },
    { billName: "Bill Name Here", amount: 1000 },
  ];

  const finalTotal = 1200;

  return <UnitpricedetailsIndividual billItems={billItems} finalTotal={finalTotal} />;
};

export default Unitpricedetails;
