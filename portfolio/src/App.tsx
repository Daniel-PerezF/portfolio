import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingpage";
import { SkillsPage } from "./pages/SkillsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="skills" element={<SkillsPage />} />
      </Routes>
    </>
  );
}

export default App;
