import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  AboutMeSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
} from '../..';
import { AboutMeInterface, ProjectInterface, ServiceInterface } from '@app/shared/models';

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    HeroSection,
    ServicesSection,
    ProjectsSection,
    AboutMeSection,
    ContactSection,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  readonly services = input.required<ServiceInterface[]>();
  readonly projects = input.required<ProjectInterface[]>();
  readonly myProfile = input.required<AboutMeInterface>();
}
