import React from "react";
import Header from "../components/Header";
import { ELinks } from "../constants";

const CheckoutPage = () => {
  return (
    <main>
      <Header activePage={ELinks.CHECKOUT} />
    </main>
  )
}

export default CheckoutPage;