
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/details"
            element={<Landing />}
          />
        </Routes>
    </Router>
  );
}

export default App;

