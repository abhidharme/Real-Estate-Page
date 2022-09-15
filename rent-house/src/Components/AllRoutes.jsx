import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Favourite } from '../Pages/Favourite'
import { Home } from '../Pages/Home'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/favourite' element={<Favourite/>} />
    </Routes>
    </>
  )
}
