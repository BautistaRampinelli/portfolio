import { Component, inject, signal } from '@angular/core';
import { Header, Footer, LandingPage } from '@shared/ui';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MyProfileService,
  ProjectsService,
  ServicesItemsService,
  ThemeService,
} from '@core/services';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MatToolbarModule, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Bautista Rampinelli');
  readonly themeService = inject(ThemeService);
  readonly servicesItemsService = inject(ServicesItemsService);
  readonly myProfileService = inject(MyProfileService);
  readonly projectsService = inject(ProjectsService);

  readonly services = this.servicesItemsService.services;
  readonly myProfile = this.myProfileService.myProfile;
  readonly projects = this.projectsService.projects;
}
