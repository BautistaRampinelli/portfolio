import { effect, Injectable, signal } from '@angular/core';

export type Theme =
  | 'theme-elegant'
  | 'theme-light'
  | 'theme-dark'
  | 'theme-pop';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'app-theme';
  readonly currentTheme = signal<Theme>('theme-elegant');
  readonly themes = [
    'theme-elegant',
    'theme-light',
    'theme-dark',
    'theme-pop',
  ] as const;

  constructor() {
    // Inicializa desde localStorage
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    if (saved && this.themes.includes(saved)) this.currentTheme.set(saved);

    // Efecto reactivo: cada vez que el tema cambia, se aplica y persiste
    effect(() => {
      const theme = this.currentTheme();
      const el = document.documentElement;
      this.themes.forEach((t) => el.classList.remove(t));
      el.classList.add(theme);
      localStorage.setItem(this.storageKey, theme);
      el.style.colorScheme = theme === 'theme-dark' ? 'dark' : 'light';
    });
  }

  set(theme: Theme) {
    if (this.themes.includes(theme)) this.currentTheme.set(theme);
  }
}
