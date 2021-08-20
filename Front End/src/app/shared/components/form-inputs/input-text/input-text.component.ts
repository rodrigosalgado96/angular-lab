import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { validatorInOut } from 'src/app/animation';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  animations: [validatorInOut]
})
export class InputTextComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formId: string;
  @Input() label: string;
  @Input() holder: string;
  @Input() validator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
