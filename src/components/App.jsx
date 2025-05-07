import React, { useState } from "react";
import Time from "./Time";
import Form from "./Form";
import animals from "../animals";

export default function App() {
  // const [wild, tame] = animals;
  // const {name : catName , sound :catSound , food : catFood , place:[first]}=tame;
  // const {name , sound , food , place  : [tigerPlace : {leave : [first , second , third]}]}=wild;
  // console.log(place);
  return (
    <>
      <h1></h1>
      <Time />
      <Form />
    </>
  );
}
