import { lazy } from "react";
import { LinkProps, RouteProps } from "react-router";

const Home = lazy(() => import('@/pages/Home.tsx'))
const About = lazy(() => import('@/pages/About.tsx'))
const Actions = lazy(() => import('@/pages/Actions.tsx'))

const routes: (LinkProps & RouteProps)[] = [
  { to: '/', path: '/', children: 'Home', element: <Home /> },
  { to: '/about', path: '/about', children: 'About', element: <About /> },
  { to: '/actions', path: '/actions', children: 'Actions', element: <Actions /> },
]

export default routes