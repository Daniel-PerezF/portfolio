import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectKey" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
