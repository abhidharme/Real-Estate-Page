import React from 'react'
import { MyFavouriteList } from '../Components/MyFavouriteList/MyFavouriteList'
import { Navbar } from '../Components/Navbar/Navbar'

export const Favourite = () => {


  return (
    <div>
      <div><Navbar /></div>
      <MyFavouriteList />
    </div>
  )
}
