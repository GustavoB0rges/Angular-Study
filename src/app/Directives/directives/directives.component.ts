import { Component, Directive, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  form: FormGroup;
  data: any[] = [];

  constructor() {
    this.form = new FormGroup({
      teste: new FormControl(null),
      teste2: new FormControl(null),
    });
  }

  onSave(): void {
    this.data = [this.form.getRawValue()];
    console.log(this.data);
  }
}

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'blue';
  }
}
