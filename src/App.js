import './App.css';

import About from './components/About';
import Links from './components/Links';
// import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <div class="flex flex-row">
        <div class="flex flex-grow" />
        <div class="leading-loose center min-h-screen flex-wrap">
          <About />
          <Links />
          {/* <Projects /> */}
        </div>
        <div class="flex flex-grow" />
      </div>
      <p className="fixed bottom-0 right-0 p-4 opacity-5">
        add me on val <a className="transition duration-500 hover:text-red-500" href="https://github.com/adityakeerthi" rel="noreferrer" target="_blank">d1t#1day</a>
      </p>
    </div>
  )
}