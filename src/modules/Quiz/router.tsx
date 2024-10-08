import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Quiz from './Quiz';
import Results from '../Results/Results';
import { FormValues } from '../../data/dataAndTypes';
import PageAnimated from '../../utils/PageAnimated';
interface QuizRouterProps {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const QuizRouter = ({ formValues, setFormValues }: QuizRouterProps) => {
  const location = useLocation();

  return (
    <PageAnimated>
      <Routes key={location.pathname}>
        {/* unhandled paths: redirects to welcome */}
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/null" element={<Navigate to="/welcome" />} />
        <Route path="/undefined" element={<Navigate to="/welcome" />} />
        {/* handled paths */}
        <Route
          path="question/:questionNumber"
          element={
            <Quiz formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route path="results/" element={<Results formValues={formValues} />} />
      </Routes>
    </PageAnimated>
  );
};
export default QuizRouter;
