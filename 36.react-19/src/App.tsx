import { Link, LinkProps, Outlet } from 'react-router'
import './App.css'

const paths: LinkProps[] = [
  { to: '/', children: 'Home' },
  { to: '/about', children: 'About' },
]

function App() {

  return (
    <>
      {/* Menu */}
      <ul className='flex gap-1 p-1'>
        {paths.map(path => (
          <li key={path.to as string}>
            <Link className='block px-4 py-3 border-transparent border-solid border rounded-lg
          hover:border-[#535bf2]' to={path.to}>{path.children}</Link>
          </li>
        ))}
      </ul>
      
      <hr className='mb-4'/>

      <Outlet />
    </>
  )
}

export default App
