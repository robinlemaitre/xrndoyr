import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EcopathsLanding from './ecopaths-landing-page';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import BlogPost3 from './BlogPost3';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EcopathsLanding />} />
          <Route path="/blogpost1" element={<BlogPost1 />} />
          <Route path="/blogpost2" element={<BlogPost2 />} />
          <Route path="/blogpost3" element={<BlogPost3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
