import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat"
import SharedChat from "./pages/SharedChatPage";

function App() {
    return (
        <div>
            <AuthContextProvider>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}>
                    <Route path=":chatId"/>
                </Route>
                <Route path="/p/:chatId" element={<SharedChat/>}/>
            </Routes>
            </AuthContextProvider>
        </div>
    )
}

export default App;