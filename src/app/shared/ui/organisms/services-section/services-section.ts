import { Component, input } from '@angular/core';
import { ServiceItem, Title } from '../..';
import { ServiceInterface } from '@app/shared/models/portfolio-models';

@Component({
  selector: 'app-services-section',
  imports: [Title, ServiceItem],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSection {
  readonly services = input.required<ServiceInterface[]>();
}
