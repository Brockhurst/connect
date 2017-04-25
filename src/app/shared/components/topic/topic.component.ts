import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITopic } from 'app/shared/interfaces/topic.interface';
import './topic.component.scss';

@Component({
  selector: 'topic',
  host: { class: 'cn-topic' },
  templateUrl: 'topic.component.html'
})
export class TopicComponent {
  @Input() public topic: ITopic;
  @Output() public onSelect = new EventEmitter<number>();

  public selectTopic() {
    this.onSelect.emit(this.topic.id);
  }
}
