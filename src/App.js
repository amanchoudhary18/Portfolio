import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";
import ProjectPage from "./pages/ProjectPage";
import { projects } from "./constants";
import ExperiencePage from "./pages/ExperiencePage";
import { Helmet } from "react-helmet";
import NotFound from "./pages/NotFound";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-[#090c10]" : "bg-[#F7F2F2]"} main`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aman Choudhary</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Check out my projects and experiences."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, Projects, Experiences"
        />
        <meta name="author" content="Aman Choudhary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="2xl:mx-[200px] xl:mx-[160px] lg:mx-[120px] md:mx-[80px] sm:mx-[40px] mx-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Aman Choudhary</title>
                  <meta
                    name="description"
                    content="This is the homepage of my portfolio. Discover more about my work and skills."
                  />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/experiences"
            element={
              <>
                <Helmet>
                  <title>Experiences | Aman Choudhary</title>
                  <meta
                    name="description"
                    content="A detailed look at my professional experiences."
                  />
                </Helmet>
                <ExperiencePage />
              </>
            }
          />
          {projects.map((project) => (
            <Route
              key={project.id}
              path={project.path}
              element={
                <>
                  <Helmet>
                    <title>{project.heading} | Aman Choudhary</title>
                    <meta
                      name="description"
                      content={`Description of ${project.heading}`}
                    />
                  </Helmet>
                  <ProjectPage {...project} />
                </>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>404 - Page Not Found</title>
                  <meta
                    name="description"
                    content="Oops! The page you're looking for doesn't exist."
                  />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
