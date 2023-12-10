import Header from "@/components/Header/Header";
import Competitions from "@/views/Competitions/Competitions";
import React from "react";

type Props = {};

function competitionsPage({}: Props) {
  return (
    <div>
      <Header />
      <Competitions />
    </div>
  );
}

export default competitionsPage;
