import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

export type NavItems = { label: string; route: string; icon?: string };

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly items = signal<NavItems[]>([
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'Servicios', route: '/services', icon: 'build' },
    { label: 'Proyectos', route: '/projects', icon: 'folder' },
    { label: 'Experiencia', route: '/experience', icon: 'work' },
    { label: 'Contacto', route: '/contact', icon: 'mail' },
  ]);
}
