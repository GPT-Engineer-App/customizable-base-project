import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Login from "./pages/Login.jsx";
import TalkToPDF from "./pages/TalkToPDF.jsx";
import ScrapeSite from "./pages/ScrapeSite.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <SharedLayout>
              <Index />
            </SharedLayout>
          } 
        />
        <Route 
          path="/talk-to-pdf" 
          element={
            <SharedLayout>
              <TalkToPDF />
            </SharedLayout>
          } 
        />
        <Route 
          path="/scrape-site" 
          element={
            <SharedLayout>
              <ScrapeSite />
            </SharedLayout>
          } 
        />
      </Routes>
    </Router>
  );
}
export default App;