import { Component, input } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field-with-label',
  imports: [MatFormField, MatLabel],
  templateUrl: './form-field-with-label.html',
  styleUrl: './form-field-with-label.scss',
})
export class FormFieldWithLabel {
  readonly label = input<string>('');
  readonly controlName = input<string>('');
  readonly type = input<string>('text');
}
