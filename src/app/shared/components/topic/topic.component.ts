import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITopic } from 'app/shared/interfaces/topic.interface';
import './topic.component.scss';

@Component({
  selector: 'topic',
  host: { class: 'cn-topic' },
  templateUrl: 'topic.component.html'
})
export class TopicComponent implements OnInit {
  @Input() public topic: ITopic;
  @Input() public selected: boolean;
  @Output() public onSelect = new EventEmitter<number>();

  public icon:string;

  ngOnInit() {
    if (this.topic.recommended) {
      this.icon = 'ok'
    }

    if (this.topic.relevant) {
      this.icon = 'heart'
    }
  }

  public selectTopic() {
    this.onSelect.emit(this.topic.id);
  }
}
