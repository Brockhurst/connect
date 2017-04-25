import { Component, Input, OnInit } from '@angular/core';

import './dropdown.component.scss';

@Component({
  selector: 'ab-dropdown',
  host: { class: 'ab-dropdown' },
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() public defaultText: string = '';
  @Input() public items: Object = [];
  @Input() public buttonClassName: string = '';

  public isOpen: boolean = false;
  public selectedItem: Object = {};

  public ngOnInit() {
    if (this.defaultText) {
      this.selectedItem = { text: this.defaultText };
    } else {
      this.selectedItem = this.items[0];
    }
  }

  public handleClick() {
    this.isOpen = !this.isOpen;
  }

  public handleSelect(item) {
    this.isOpen = false;
    this.selectedItem = item;
  }

}
