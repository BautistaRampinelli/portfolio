import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Footer, ThemeSelector } from '@shared/ui';
import { ThemeService } from './core/services/theme-service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ThemeSelector, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Bautista Rampinelli');
  readonly themeService = inject(ThemeService);
}
