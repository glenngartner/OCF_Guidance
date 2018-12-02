import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {QAndAService} from '../services/q-and-a.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  public answer;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private QAService: QAndAService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.answer = this.QAService.getAnswer(this.id);
  }

  public gotToQuestions() {
    this.router.navigate(['/questions']);
  }

  public getAnswerTitle(): string {
    return this.QAService.getQuestion(this.id).body;
  }

}
