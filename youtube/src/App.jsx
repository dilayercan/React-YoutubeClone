import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideoProvider } from "./context/videoContext"; // VideoProvider'ı içe aktar
import Header from "./components/Header"; // Header bileşenini içe aktar
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <VideoProvider>
      {" "}
      {/* VideoProvider ile sarmalanmış */}
      <Router>
        <Header /> {/* Header bileşenini buraya ekledim */}
        <div className="flex">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/watch/id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </VideoProvider>
  );
};

export default App;
