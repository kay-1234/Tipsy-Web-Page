import { Component, OnInit, output, signal } from '@angular/core';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'tps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Navigation data
  navLinks = signal<NavLink[]>([
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Contact' },
  ]);

  // Output event for navigation clicks
  navigationClick = output<string>();

  // Handle navigation click
  onNavClick = (event: Event, href: string): void => {
    event.preventDefault();
    this.navigationClick.emit(href);
  };
}
