import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(value: string) {
    console.log(value);

    this.valueChange.emit(value);
  }
}
