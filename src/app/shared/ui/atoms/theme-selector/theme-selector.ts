import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '@app/core/services/theme-service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule, MatIcon],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.scss',
})
export class ThemeSelector {
  private themeService = inject(ThemeService);
  readonly currentTheme = this.themeService.currentTheme;
  readonly themes: { icon: string; value: Theme }[] = [
    { icon: 'palette', value: 'theme-elegant' },
    { icon: 'light_mode', value: 'theme-light' },
    { icon: 'dark_mode', value: 'theme-dark' },
    { icon: 'auto_awesome', value: 'theme-pop' },
  ];

  onChange(theme: Theme) {
    this.themeService.set(theme);
  }
}
