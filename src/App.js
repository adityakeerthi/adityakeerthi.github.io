import './App.css';

import About from './components/About';
import Links from './components/Links';

export default function App() {
  return (
    <div>
      <div class="flex flex-row">
        <div class="flex flex-grow" />
        <div class="leading-loose center min-h-screen flex-wrap">
          <About />
          <Links />
        </div>
        <div class="flex flex-grow" />
      </div>
    </div>
  )
}