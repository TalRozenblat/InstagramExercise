import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateFeed from "./pages/PrivateFeed";
import ProfilePage from "./pages/ProfilePage";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ActivityContextProvider } from "./contexts/ActivityContext";
import { FeedContextProvider } from "./contexts/FeedContext";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ActivityContextProvider>
            <FeedContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/personal_feed" element={<PrivateFeed />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </FeedContextProvider>
          </ActivityContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
