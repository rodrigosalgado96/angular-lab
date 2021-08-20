import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disableButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
