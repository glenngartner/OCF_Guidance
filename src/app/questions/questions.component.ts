import {Component, OnInit} from '@angular/core';
import {Question, QuestionAndAnswer} from '../generic/interfaces';
import {QAndAService} from '../services/q-and-a.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionAndAnswers: QuestionAndAnswer[] = [];

  constructor(private qandAService: QAndAService) {
  }

  ngOnInit() {
      this.questionAndAnswers = this.qandAService.questionsAndAnswers;
  }

  public onPointerOver(i: number) {
    this.questionAndAnswers[i].question.mouseOver = true;
  }

  public onPointerOut(i: number) {
    this.questionAndAnswers[i].question.mouseOver = false;
  }

}
