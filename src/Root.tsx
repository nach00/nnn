import { Routes, Route, Outlet, Link } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Resume } from './pages/Resume'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Tamagui } from './pages/projects/Tamagui'
import { Button, H4, H6, Nav, Paragraph, XStack } from 'tamagui'
import { TopBar } from './components/TopBar'
import { BottomBar } from './components/BottomBar'
import { Services } from './pages/Services'

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/tamagui" element={<Tamagui />} />
          {/*<Route path="dashboard" element={<Dashboard />} />*/}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/*<Route path="*" element={<NoMatch />} />*/}
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <TopBar />

      <Outlet />

      <BottomBar />
    </>
  )
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }
//
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }
//
// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   )
// }
//
// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   )
// }
