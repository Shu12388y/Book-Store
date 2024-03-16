import { lazy, useState } from 'react'
// import Home from './components/Home'
const Home =lazy(()=>import("./components/Home"))
function App() {


  return (
    <>
    <Home/>
     
    </>
  )
}

export default App
