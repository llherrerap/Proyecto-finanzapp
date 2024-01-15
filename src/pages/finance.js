import React, { useState } from "react";
import PersonalFinance from '../components/Finance'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const FinancePage = () => {
  const [isOpen, setIsOpen] =useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
        <PersonalFinance/>
        <Footer/>
    </>
  )
}

export default FinancePage