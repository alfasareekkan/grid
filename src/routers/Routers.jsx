import { Routes, Route } from "react-router-dom"

import React from 'react'
import HomePage from "../pages/HomePage"
import GridPage from "../pages/GridPage"

function Routers() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grid" element={<GridPage/>} />
    </Routes>
  )
}

export default Routers
