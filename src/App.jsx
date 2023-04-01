import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import { RiMenuFoldLine } from 'react-icons/ri'
import classNames from 'classnames'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'

export const NavContext = React.createContext()


function App() {

  const [isWide, setIsWide] = useState(false)

  const toggleNavClass = () => {
    setIsWide(!isWide)
  }

  return (
    <div className=" fixed w-screen h-screen flex bg-gray-200 p-3 gap-2 ">

      <NavContext.Provider value={isWide}>
        <div className='relative w-fit' >
          <SideBar />
          <RiMenuFoldLine className={ classNames('absolute top-[20px] right-[15px] text-2xl cursor-pointer ', {' rotate-180': isWide})}   onClick={toggleNavClass} />
        </div>
  
        <section className={ classNames('w-[calc(100%-300px)]', {'w-[calc(100%-58px)]':isWide}) } >
          {/* <Profile /> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
      </NavContext.Provider>

    </div>
  )
}

export default App
