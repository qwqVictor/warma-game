import './App.css'
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Index } from './pages';
import { Angel } from './pages/angel';
import { Copyright } from './components/copyright';
import { Polemo } from './pages/polemo';

export const title = "warma 游戏移植屋 by qwqVictor"

function App() {

  return (
    <HashRouter>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/angel" element={<Angel />} />
          <Route path="/polemo" element={<Polemo />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        <Copyright />
      </div>
    </HashRouter>
  );
}

export default App
