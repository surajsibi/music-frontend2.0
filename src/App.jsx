import LoginSignup from "./pages/LoginSignup"
import Homepage from "./pages/Homepage"
import Musicpage from "./pages/Musicpage"
import Artist from "./pages/Artist"
import Playlist from "./pages/Playlist"
import Album from "./pages/Album"
import { Toaster } from "react-hot-toast"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import './App.css'
function App() {


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/music/:id"
            element={<Musicpage />}
          />
          <Route
            path="/artist/:id"
            element={<Artist />}
          />
          <Route
            path="/playlist/:id"
            element={<Playlist />}
          />
          <Route
            path="/album/:id"
            element={<Album/>}
          />

        </Route>

        <Route
          path="/login"
          element={<LoginSignup />}
        />
      </Routes>
      <Toaster position="top-right" reverseOrder={true}
        toastOptions={{
          error: {
            style: { borderRadius: "0", color: "red" },
          },
          success: {
            style: { borderRadius: "0", color: "green" },
          },
          duration: 2000,
        }} />
    </>
  )
}

export default App
