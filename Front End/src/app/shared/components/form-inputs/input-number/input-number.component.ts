import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { validatorInOut } from 'src/app/animation';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  animations: [validatorInOut]
})
export class InputNumberComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formId: string;
  @Input() label: string;
  @Input() holder: string;
  @Input() validator: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
