import { Component, input } from '@angular/core';
import { CardBase } from '../../atoms/card-base/card-base';
import { Title } from '../../atoms/title/title';
import { ButtonPrimary } from '../../atoms/button-primary/button-primary';

@Component({
  selector: 'app-service-item',
  imports: [CardBase, Title, ButtonPrimary],
  templateUrl: './service-item.html',
  styleUrl: './service-item.scss',
})
export class ServiceItem {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly actionLabel = input<string>('Ver más');
}
