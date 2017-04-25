import { Component, Input } from '@angular/core';

import './editable.component.scss';

@Component({
  selector: 'ab-editable',
  host: { class: 'ab-editable' },
  templateUrl: './editable.component.html'
})
export class EditableComponent {

  @Input() public text: string = '';
  @Input() public textClassName: string = '';

  public isEditable: boolean = false;
  public prevText: string = '';

  public handleEnableEdit(editableElement) {
    this.prevText = editableElement.innerText;
    this.isEditable = true;
    editableElement.contentEditable = true;
    editableElement.focus();
  }

  public handleApplyClick() {
    this.isEditable = false;
  }

  public handleClearClick(editableElement) {
    this.isEditable = false;
    editableElement.innerText = this.prevText;
  }

}
