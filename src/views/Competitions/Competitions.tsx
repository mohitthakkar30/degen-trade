import React from "react";
import Card from "./components/Card";

type Props = {};

function Competitions({}: Props) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Competitions;
