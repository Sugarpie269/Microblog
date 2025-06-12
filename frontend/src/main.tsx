import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./pages/home/LoginPage.tsx"
import Home from "./pages/home/HomePage.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element={<Login/>}/>
            <Route path = "/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
)
