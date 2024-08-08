import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import EcopathsLanding from './ecopaths-landing-page';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EcopathsLanding />} />
        <Route path="/blog1" element={<BlogPost1 />} />
        <Route path="/blog2" element={<BlogPost2 />} />
      </Routes>
    </Router>
  );
};

export default App;
