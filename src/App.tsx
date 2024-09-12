import './App.scss';
import { Container, Box } from '@mui/material';

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import QuizRouter from './modules/Quiz/router';

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          {/* "unhandled" paths: redirects to welcome */}
          <Route path="*" element={<Navigate to="/welcome" />} />
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/null" element={<Navigate to="/welcome" />} />
          <Route path="/undefined" element={<Navigate to="/welcome" />} />
          {/* <Route path="/welcome" element={} /> */}
          <Route path="/quiz/*" element={<QuizRouter />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
