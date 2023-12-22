import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingpage";

function App() {
  return (
    <div className="bg-[#364652]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <LandingPage />
    </div>
  );
}

export default App;
