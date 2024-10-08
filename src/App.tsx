import './App.scss';
import '@fontsource/open-sans';
import { useState, useEffect } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import QuizRouter from './modules/Quiz/router';
import Welcome from './modules/Welcome/Welcome';
import { FormValues } from './data/dataAndTypes';
import { initialFormValues } from './data/dataAndTypes';

function App() {
  const localValues =
    localStorage.getItem('formValuesLocal') &&
    JSON.parse(localStorage.getItem('formValuesLocal') || 'null');
  const [formValues, setFormValues] = useState<FormValues>(
    localValues || initialFormValues
  );

  useEffect(() => {
    const formValuesStringified = JSON.stringify(formValues);
    localStorage.setItem('formValuesLocal', formValuesStringified);
  }, [formValues]);

  return (
    <BrowserRouter>
      <Routes>
        {/* "unhandled" paths: redirects to welcome */}
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/null" element={<Navigate to="/welcome" />} />
        <Route path="/undefined" element={<Navigate to="/welcome" />} />
        {/* "handled" paths */}
        <Route
          path="/welcome"
          element={<Welcome setFormValues={setFormValues} />}
        />
        <Route
          path="/quiz/*"
          element={
            <QuizRouter formValues={formValues} setFormValues={setFormValues} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
