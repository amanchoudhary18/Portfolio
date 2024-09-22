import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";
import ProjectPage from "./pages/ProjectPage";
import { projects } from "./constants";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-[#090c10]" : "bg-[#F7F2F2]"} main`}>
      <div className="2xl:mx-[200px] xl:mx-[160px] lg:mx-[120px] md:mx-[80px] sm:mx-[40px] mx-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          {projects.map((project) => (
            <Route path={project.path} element={<ProjectPage {...project} />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
