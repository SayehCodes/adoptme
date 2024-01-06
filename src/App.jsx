import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
