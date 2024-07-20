import React from "react";
import Header from "./components/header";
import MainImage from "./components/carousel";
import Popular from "./components/popular";
import BetterToSee from "./components/betterToSee";
import Testimoni from "./components/testimoni";
import BacaJuga from "./components/bacaJuga";
import Footer from "./components/footer";
import ContactButton from "./components/contactButton";
import KotaPopular from "./components/kotaPopular";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="mt-20 w-full">
        <ContactButton />
        <MainImage />
        <Popular />
        <BetterToSee />
        <br />
        <KotaPopular />
        <Testimoni />
        <BacaJuga />
        <Footer />
      </main>
    </div>
  );
}

export default App;
