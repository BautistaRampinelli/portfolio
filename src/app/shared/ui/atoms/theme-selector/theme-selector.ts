import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '@app/core/services/theme-service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-theme-selector',
  imports: [MatButtonToggleModule],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.scss',
})
export class ThemeSelector {
  private readonly theme = inject(ThemeService);
  readonly current = this.theme.currentTheme;
  readonly themes = this.theme.themes;

  onChange(theme: string) {
    this.theme.set(theme as any);
  }
}
