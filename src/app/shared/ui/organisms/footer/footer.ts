import { Component, computed, input, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';

type FooterLinks = { label: string; icon: string; link: string };

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear = computed(() => new Date().getFullYear());
  protected readonly footerLinks = signal<FooterLinks[]>([
    { label: 'GitHub', icon: 'github', link: ''},
    { label: 'LinkedIn', icon: 'linkedin', link: ''},
    { label: 'email', icon: 'mail', link: ''},
  ]);
  protected readonly author = input<string>('Bautista Rampinelli');
  protected readonly imgSrc = input<string>('assets/images/logo.png');
}
