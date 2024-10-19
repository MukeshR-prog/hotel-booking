import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Popupside1 from "./component/Popupside1.jsx";
import Popupside1delete from "./component/Popupside1delete.jsx";
import PriceList from "./component/PriceList.jsx";
import Unitpricedetails from "./component/Unitpricedetails.jsx";
import Addamenities from "./component/Addamenities.jsx";
import AmmenitiesUtils from "./component/AmmenitiesUtils.jsx";
import Displayammenities from "./component/Displayammenities.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
   <Displayammenities/>
    <Addamenities/>
    <Unitpricedetails />
    {/* <PriceList />
   
    <Popupside1delete />
    <Popupside1 /> */}
  </StrictMode>
);
