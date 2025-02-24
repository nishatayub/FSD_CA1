import { useState } from 'react'
import React from 'react'
import TeamMemberCard from './components/TeamMemberCard.jsx'
import './App.css'

function App() {
  return (
    <>
      <TeamMemberCard name="John Doe" title="Software Engineer"/>
      <TeamMemberCard name="Nishat Ayub" title="Software Developer"/>
    </>
  )
}

export default App
