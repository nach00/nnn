import { Routes, Route, Outlet } from 'react-router-native'
import { Analytics } from '@vercel/analytics/react'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Resume } from './pages/Resume'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Tamagui } from './pages/projects/Tamagui'
import { Scoutify } from './pages/projects/Scoutify'
import { ZConsole } from './pages/projects/ZConsole'
import { Fossil } from './pages/projects/Fossil'
import { RFIDInterlock } from './pages/projects/RFIDInterlock'
import { TopBar } from './components/TopBar'
import { BottomBar } from './components/BottomBar'
import { Services } from './pages/Services'

export default function App() {
  const Skagen = () => {
    window.location.href = '/fossil/FSL.html'
    return <></>
  }
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
          <Route path="projects/fossil" element={<Fossil />} />
          <Route path="projects/scoutify" element={<Scoutify />} />
          <Route path="projects/zconsole" element={<ZConsole />} />
          <Route path="projects/rfidinterlock" element={<RFIDInterlock />} />
          <Route path="fsl" element={<Skagen />} />
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

      <Analytics />

      <SpeedInsights />

      <TopBar />

      <Outlet />

      <BottomBar />
    </>
  )
}
