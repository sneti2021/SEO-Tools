import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlagiarismChecker from './pages/PlagiarismChecker';
import AiDetector from './pages/AiDetector';
import BacklinkAnalyzer from './pages/BacklinkAnalyzer';
import MetaTags from './pages/MetaTags';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plagiarism" element={<PlagiarismChecker />} />
          <Route path="/detector" element={<AiDetector />} />
          <Route path="/backlinks" element={<BacklinkAnalyzer />} />
          <Route path="/metatags" element={<MetaTags />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
