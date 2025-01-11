import LoginSignup from "./pages/LoginSignup"
import Homepage from "./pages/Homepage"
import { Toaster } from "react-hot-toast"
import Layout from "./Layout"
import { Route,Routes } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route
        path="/"
        element={<Layout/>}
        >  
        <Route
          path="/"
          element={<Homepage/>}
        />
        
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={<LoginSignup/>}
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
