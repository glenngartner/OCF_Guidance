import {Component, OnInit} from '@angular/core';

interface Question {
  body: string;
  mouseOver: boolean;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionBodies = [
    'I\'m struggling with relationships',
    'My roommate is difficult to live with',
    'How do I know God is real?',
    'I\'m suffering',
    'How can I share my faith?'
  ];

  public questions: Question[] = [];

  constructor() {
  }

  ngOnInit() {
    for (const questionBody of this.questionBodies) {
      this.questions.push({body: questionBody, mouseOver: false});
    }
  }

  public onPointerOver(i: number) {
    this.questions[i].mouseOver = true;
  }

  public onPointerOut(i: number) {
    this.questions[i].mouseOver = false;
  }

}
