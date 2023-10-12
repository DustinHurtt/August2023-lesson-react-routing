import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ErrorPage from './pages/ErrorPage'
import HomePageWithNavigate from './pages/HomePageWithNavigate'

import projectsData from './projects-data.json'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

import QueryStringExample from './pages/QueryStringExample'

function App() {


  return (
    <div className="App">

      <Navbar />

        <Routes>

          {/* <Route path='/' element={ <HomePage /> } /> */}
          <Route path='/' element={ <HomePageWithNavigate /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/projects' element={ <ProjectsPage projectsData={projectsData} />} />

          <Route path='/projects/:projectId' element={ <ProjectDetailsPage projectsData={projectsData} /> } />

          <Route path="/example" element={ <QueryStringExample /> } />

          <Route path='*' element={ <ErrorPage /> } />

        </Routes>

    </div>
  )
}

export default App
