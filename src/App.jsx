import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Chat from "./pages/Chat"
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <div>
            <AuthContextProvider>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
            </Routes>
            </AuthContextProvider>
        </div>
    )
}

export default App;