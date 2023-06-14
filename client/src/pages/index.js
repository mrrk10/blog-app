import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useSelector } from 'react-redux'
import Login from './login'
import Home from './home'

import React from 'react'

const Main = () => {
  const {token}=useSelector(state=>state)

  return (
 <div>
 {/* {
  token?<Home/>:<Login/>
 } */}

<Login/>

 </div>

  
  )
}

export default Main