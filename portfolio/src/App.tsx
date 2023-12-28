import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
