import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddVolunteer from './components/AddVolunteer';
import ViewVolunteers from './components/ViewVolunteers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddVolunteer />} />
        <Route path="/view" element={<ViewVolunteers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
