import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import CharacterList from '../CharacterList/CharacterList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}
