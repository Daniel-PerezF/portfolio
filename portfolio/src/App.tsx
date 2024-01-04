import { Route, Routes } from "react-router-dom";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { SinglePage } from "./pages/SinglePage";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="projects/:projectKey" element={<ProjectDetailsPage />} />
        </Routes>
      </DarkModeProvider>
    </>
  );
}

export default App;
