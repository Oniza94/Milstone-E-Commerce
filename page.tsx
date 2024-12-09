import Image from "next/image";
import UpperHeader from "./components/header";
import { LowerHeader } from "./components/header";
import NavBar from "./components/Navbar/page";
import NewArrival from "./components/Navbar/NewArrival/page";
import TopSelling from "./components/Navbar/TopSelling/page";
import { ArrivalDown } from "./components/Navbar/TopSelling/page";
import Customers from "./Customers/page";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    
    <UpperHeader />
    <LowerHeader />
    <NavBar />
    <NewArrival />
    <TopSelling />
    <ArrivalDown />
    <Customers />
    <Footer />
    
    </>

     );
}
