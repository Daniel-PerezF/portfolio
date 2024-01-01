import { Route, Routes } from "react-router-dom";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { SinglePage } from "./pages/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePage />} />

        <Route path="projects/:projectKey" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectKey" element={<ProjectDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes> */
}
