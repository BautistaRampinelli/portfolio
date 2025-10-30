import { Component, input } from '@angular/core';
import { ServiceItem, Title } from '../..';

export type ServiceInterface = {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-services-section',
  imports: [Title, ServiceItem],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSection {
  readonly services = input.required<ServiceInterface[]>();
}
