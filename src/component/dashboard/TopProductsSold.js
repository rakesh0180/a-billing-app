import React from "react";
import { useSelector } from "react-redux";
import TopProductsBarChart from "./TopProductsBarChart";

const TopProductsSold = ({ products }) => {
  const bills = useSelector((state) => state.bills);

  const findProduct = (id, array) => {
    const prod = array.find((ele) => {
      return ele._id === id;
    });
    return prod ? { ...prod } : {};
  };

  const lineItemProducts = [];
  bills.forEach((ele) => {
    lineItemProducts.push(...ele.lineItems);
  });

  const getCountOfPurchaseNumber = {};
  lineItemProducts.forEach((ele) => {
    if (getCountOfPurchaseNumber[findProduct(ele.product, products).name]) {
      getCountOfPurchaseNumber[findProduct(ele.product, products).name] =
        getCountOfPurchaseNumber[findProduct(ele.product, products).name] +
        ele.quantity;
    } else {
      getCountOfPurchaseNumber[findProduct(ele.product, products).name] =
        ele.quantity;
    }
  });

  //data format for bar graph
  const testData = [];
  let obj = { name: "", "units sold": "" };
  for (const key in getCountOfPurchaseNumber) {
    obj["name"] = key;
    obj["units sold"] = getCountOfPurchaseNumber[key];
    testData.push(obj);
    obj = { name: "", "units sold": "" };
  }
  // console.log('testData',testData)

  const sortData = testData.sort((a, b) => b["units sold"] - a["units sold"]);
  const top5 = sortData.slice(0, 5);

  return (
    <div>
      <TopProductsBarChart top5={top5} />
    </div>
  );
};

export default TopProductsSold;
