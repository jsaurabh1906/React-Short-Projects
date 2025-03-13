import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import projects from "../projects";
import HomePage from "../components/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Home Route */}
      <Route index element={<HomePage />} />

      {/* Dynamically Generate Routes for Projects */}
      {projects.map(({ path, component: Component }) => (
        <Route key={path} path={path.slice(1)} element={<Component />} />
      ))}
    </Route>
  )
);

export default router;
