import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-header">
      <h1>About the Author</h1>
      <p>The story behind the stories</p>
    </section>

    <section class="content">
      <div class="about-card">
        <div class="avatar">OU</div>
        <h2>Onesi Umoize</h2>
        <p class="location">Akoko Edo, Edo State, Nigeria</p>

        <div class="bio">
          <p>
            I am Onesi Umoize, proudly from Akoko Edo in Edo State, Nigeria.
            This project is a personal expression of what it means to grow up and
            live as a Nigerian — the joys, the struggles, the food, the laughter,
            and everything in between.
          </p>
          <p>
            Akoko Edo is in the northern part of Edo State, known for its hilly
            terrain, rich cultural heritage, and hardworking people. Growing up here
            shaped my values: community, resilience, and pride in where I come from.
          </p>
          <p>
            Through this app, I hope to share a piece of Nigeria with the world —
            not the Nigeria of headlines, but the Nigeria of everyday people living
            extraordinary lives in ordinary ways.
          </p>
        </div>

        <div class="links">
          <a href="https://github.com/SirNesy" target="_blank" rel="noopener">GitHub: SirNesy</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #0a6847, #16423C);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }
    .page-header h1 { font-size: 2.5rem; }
    .page-header p { color: #b8d8c8; margin-top: 0.5rem; }
    .content { max-width: 640px; margin: 3rem auto; padding: 0 2rem; }
    .about-card {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #0a6847;
      color: white;
      font-size: 1.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
    }
    h2 { color: #0a6847; margin-bottom: 0.3rem; }
    .location { color: #888; font-size: 0.95rem; margin-bottom: 2rem; }
    .bio { text-align: left; }
    .bio p { color: #444; margin-bottom: 1rem; }
    .links { margin-top: 2rem; }
    .links a {
      display: inline-block;
      padding: 0.6rem 1.5rem;
      background: #0a6847;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
    }
    .links a:hover { background: #085a3c; }
  `]
})
export class AboutComponent {}
