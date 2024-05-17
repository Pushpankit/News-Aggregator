import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import News from './component/News';

function App() {
  const apiKey = "98f60b6149144c00a3a44616e98fe0b5";

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<News apiKey={apiKey} key={"general"} pageSize={12} country={"in"} category={"general"} />} />
        <Route path="/business" element={<News apiKey={apiKey} key={"business"} pageSize={12} country={"in"} category={"business"} />} />
        <Route path="/entertainment" element={<News apiKey={apiKey} key={"entertainment"} pageSize={12} country={"in"} category={"entertainment"} />} />
        <Route path="/health" element={<News apiKey={apiKey} key={"health"} pageSize={12} country={"in"} category={"health"} />} />
        <Route path="/science" element={<News apiKey={apiKey} key={"science"} pageSize={12} country={"in"} category={"science"} />} />
        <Route path="/sports" element={<News apiKey={apiKey} key={"sports"} pageSize={12} country={"in"} category={"sports"} />} />
        <Route path="/technology" element={<News apiKey={apiKey} key={"technology"} pageSize={12} country={"in"} category={"technology"} />} />
      </Routes>
    </Router>
  );
}

export default App;

