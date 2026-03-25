import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="logo">Life of a Nigerian</a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/culture" routerLinkActive="active">Culture</a>
        <a routerLink="/food" routerLinkActive="active">Food</a>
        <a routerLink="/daily-life" routerLinkActive="active">Daily Life</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </div>
    </nav>
    <main>
      <router-outlet />
    </main>
    <footer>
      <p>&copy; 2026 Onesi Umoize | Akoko Edo, Edo State, Nigeria</p>
    </footer>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #0a6847;
      color: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      color: white;
      text-decoration: none;
    }
    .nav-links { display: flex; gap: 1.5rem; }
    .nav-links a {
      color: #d4e7dc;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: #fff;
    }
    main { min-height: 80vh; }
    footer {
      text-align: center;
      padding: 2rem;
      background: #1a1a1a;
      color: #aaa;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent {}
