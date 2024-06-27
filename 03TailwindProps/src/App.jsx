import React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from '../components/Cards';

function App() {
  const [count, setCount] = useState(0)

  // let myobje = {
  //   username : "Bhakti Agrawal",
  //   age : 22,
  // }
  // let myarr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4">Tailwind CSS</h1>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/15088908/pexels-photo-15088908/free-photo-of-a-shadow-of-a-person-on-a-white-curtain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption cl>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>

    <Cards name = "Uma Agrawal" btntext = "uma profile"/>
    <Cards name="Bhakti Agrawal" btntext= "Bhakti profile"/>
    <Cards name = "Nandini Agrawal"/>
    </>
  );

}

export default App
