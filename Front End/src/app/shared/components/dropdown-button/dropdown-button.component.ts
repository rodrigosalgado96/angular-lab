import { Component, Input, OnInit } from '@angular/core';
import { dropMenuAnimation } from 'src/app/animation';
import { dropdownButton } from '../../models/dropdown-button.model';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  animations: [dropMenuAnimation]
})
export class DropdownButtonComponent implements OnInit {

  @Input() buttonsList: dropdownButton[];

  actionMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleActionMenu() {
    this.actionMenu = !this.actionMenu;
  }

}
