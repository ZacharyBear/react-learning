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
      <ul className='flex gap-1 px-6 py-1'>
        {paths.map(path => (
          <li key={path.to as string}>
            <Link className='block px-4 py-3 border-transparent border-solid border rounded-lg
          hover:border-[#535bf2]' to={path.to}>{path.children}</Link>
          </li>
        ))}
      </ul>

      <hr/>

      <div className='mt-16 mx-auto w-[60rem]'>
        <Outlet />
      </div>
    </>
  )
}

export default App
