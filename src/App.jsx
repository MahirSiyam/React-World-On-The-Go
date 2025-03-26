import { Suspense } from 'react';
import './App.css'
import Countries from './componentss/Countries/Countries'


const countriesProrise = fetch("https://restcountries.com/v3.1/all")
.then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback = {<h3>Mahir going....</h3>}>
        <Countries countriesProrise = {countriesProrise}></Countries>
      </Suspense>
    </>
  )
}

export default App
