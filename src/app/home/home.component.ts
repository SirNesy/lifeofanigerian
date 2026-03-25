import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Life of a Nigerian</h1>
        <p class="subtitle">Stories, culture, and everyday moments from the heart of Akoko Edo</p>
        <p class="author">By Onesi Umoize</p>
        <a routerLink="/culture" class="cta">Explore Our Culture</a>
      </div>
    </section>

    <section class="intro">
      <h2>Welcome</h2>
      <p>
        Nigeria is a land of over 200 million people, 250+ ethnic groups, and countless stories
        waiting to be told. From the rolling hills of Akoko Edo in Edo State to the bustling
        streets of Lagos, every corner has a tale. This is my story — a window into the
        vibrant, resilient, and beautiful life of a Nigerian.
      </p>
    </section>

    <section class="cards">
      <a routerLink="/culture" class="card">
        <div class="card-icon">🎭</div>
        <h3>Culture & Traditions</h3>
        <p>Festivals, languages, and the rich heritage of Akoko Edo</p>
      </a>
      <a routerLink="/food" class="card">
        <div class="card-icon">🍲</div>
        <h3>Nigerian Food</h3>
        <p>From pounded yam to jollof rice — the flavours that define us</p>
      </a>
      <a routerLink="/daily-life" class="card">
        <div class="card-icon">🌅</div>
        <h3>Daily Life</h3>
        <p>What a typical day looks like growing up Nigerian</p>
      </a>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #0a6847 0%, #16423C 100%);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
    }
    .hero h1 { font-size: 3.2rem; margin-bottom: 0.5rem; }
    .subtitle { font-size: 1.2rem; color: #b8d8c8; margin-bottom: 0.5rem; }
    .author { font-size: 1rem; color: #8fc0a9; margin-bottom: 2rem; font-style: italic; }
    .cta {
      display: inline-block;
      padding: 0.8rem 2rem;
      background: #fff;
      color: #0a6847;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s;
    }
    .cta:hover { transform: translateY(-2px); }
    .intro {
      max-width: 720px;
      margin: 4rem auto;
      padding: 0 2rem;
      text-align: center;
    }
    .intro h2 { font-size: 2rem; margin-bottom: 1rem; color: #0a6847; }
    .intro p { font-size: 1.05rem; color: #444; }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 960px;
      margin: 0 auto 4rem;
      padding: 0 2rem;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
    .card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .card h3 { color: #0a6847; margin-bottom: 0.5rem; }
    .card p { color: #666; font-size: 0.95rem; }
  `]
})
export class HomeComponent {}
