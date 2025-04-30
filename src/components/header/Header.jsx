import './header.css'
import { useState } from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import Nav from './Nav'


export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='header'>
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Nav toggle={toggle} setToggle={setToggle} />
    </header>
  )
}
