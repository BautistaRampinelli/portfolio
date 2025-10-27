import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Footer } from '@shared/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
