export interface QuestionAndAnswer {
  question: Question;
  answer: Answer;
}
export interface Question {
  body: string;
  mouseOver: boolean;
  id?: number;
}

export interface Answer {
  body: string;
  scripture?: string;
  id?: number;
}

