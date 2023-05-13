import React from "react";
import Header from "../components/Header";
import { ELinks } from "../constants";

const DeliveryPage = () => {
  return (
    <main>
      <Header activePage={ELinks.DELIVERY} />
    </main>
  )
}

export default DeliveryPage;