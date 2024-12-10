import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import routes from '@/config/route.tsx'

const Home = lazy(() => import('./pages/Home.tsx'))
const About = lazy(() => import('./pages/About.tsx'))
const Actions = lazy(() => import('./pages/Actions.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {routes.map(route => <Route path={route.path} element={route.element} />)}
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/action' element={<Actions />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
