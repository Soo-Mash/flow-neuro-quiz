export type QuestionDataItem = {
  title: string;
  question: string;
  paragraph?: string;
  responses: string[];
};

export type QuizData = QuestionDataItem[];
