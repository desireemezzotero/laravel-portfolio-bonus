import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./context/GlobalContext"
import HomePage from "./pages/HomePage"
import ProjectShow from "./pages/ProjectShow"
import About from "./pages/about"

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:id" element={<ProjectShow />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </GlobalProvider>
    </>
  )
}

export default App
