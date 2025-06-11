import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@/layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from 'pages/home';
import About from 'pages/about';
import Project from 'pages/project';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/home",
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/project",
        Component: Project
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
