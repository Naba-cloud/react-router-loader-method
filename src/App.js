import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import GithubFollowers from "./components/GithubFollowers/GithubFollowers";

import "./styles.css";
import { githubdata } from "./components/GithubFollowers/GithubFollowers";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route loader={githubdata} path="/" element={<GithubFollowers />} />
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
