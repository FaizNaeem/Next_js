import { Footer } from "./Footer"
import { Input } from "./Input"
import { Navbar } from "./Navbar"

// import { Page } from "./about/page"

import { Home } from "./cards"


export default function index() {
  return (
  <>
  {/* <Page/> */}
<Navbar faiz={"Faiz"}/>
<Input/>
<Home/>
<Footer/>
  </>
  )
}
