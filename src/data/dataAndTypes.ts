export type QuestionDataItem = {
  title: string;
  question: string;
  paragraph?: string;
  responses: string[];
};

export type QuizData = QuestionDataItem[];

export type FormValues = (number | null)[];

export const initialFormValues: FormValues = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
