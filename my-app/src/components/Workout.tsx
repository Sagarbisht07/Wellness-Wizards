import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Benefits from './Benefits/Benefits'
import Program from './Programs/Program'
import { Sports } from './About/Sports'
import { FAQ } from './About/FAQ'

export const Workout = (): JSX.Element  => {
  return (
    <div>
        <About/>
        <Banner/>
        <Program/>
        <Benefits/>
        <h1 className="text-2xl mb-4 font-bold text-black">Sports Activites</h1>
        <Sports/>
        {/* <FAQ/> */}
    </div>
  )
}
