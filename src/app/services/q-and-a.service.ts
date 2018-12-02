import {Injectable} from '@angular/core';
import {Answer, Question, QuestionAndAnswer} from '../generic/interfaces';
import {QAndAList} from '../generic/QAndAList';

@Injectable({
  providedIn: 'root'
})
export class QAndAService {
  public questionsAndAnswers: QuestionAndAnswer[] = [];

  constructor() {
    this.questionsAndAnswers = QAndAList;
  }

  public getAnswer(id: string): Answer {
    return this.questionsAndAnswers[id].answer;
  }

  public getQuestion(id: string): Question {
      return this.questionsAndAnswers[id].question;
  }
}
