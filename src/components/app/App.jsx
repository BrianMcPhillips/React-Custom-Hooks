import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CharacterList from '../CharacterList/CharacterList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
      </Routes>
    </Router>
  )
}
