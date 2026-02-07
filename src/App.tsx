import './App.css'
import Homepage from './components/pages/homepage.tsx';
import Layout from './components/pages/layout.tsx'
import EventRegister from './components/pages/event-register.tsx';
import BootcampRegister from './components/pages/bootcamp-register.tsx';
import { BrowserRouter, Routes, Route } from "react-router";
import gsap from "gsap";
import { ScrollTrigger, SplitText, Draggable } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText, Draggable);

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="register" element={<EventRegister />} />
            <Route path="hackathon-register" element={<EventRegister />} />
            <Route path="bootcamp-register" element={<BootcampRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
