import { Route, Routes } from "react-router";
import Home from "./home.tsx";
import Gallery from "./gallery.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="*" element={"Not found"} />;
    </Routes>
  );
}
