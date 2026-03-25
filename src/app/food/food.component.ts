import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <h1>Nigerian Food</h1>
      <p>The flavours that bring us together</p>
    </section>

    <section class="content">
      <div class="food-grid">
        <div class="food-card" *ngFor="let food of foods">
          <div class="food-emoji">{{ food.emoji }}</div>
          <h3>{{ food.name }}</h3>
          <p>{{ food.description }}</p>
        </div>
      </div>

      <div class="quote-box">
        <blockquote>
          "In Nigeria, food is not just sustenance — it is love, it is community,
          it is the glue that holds families together across generations."
        </blockquote>
        <cite>- Onesi Umoize</cite>
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
    .content { max-width: 960px; margin: 3rem auto; padding: 0 2rem; }
    .food-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    .food-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.2s;
    }
    .food-card:hover { transform: translateY(-3px); }
    .food-emoji { font-size: 3rem; margin-bottom: 0.8rem; }
    .food-card h3 { color: #0a6847; margin-bottom: 0.5rem; }
    .food-card p { color: #555; font-size: 0.9rem; }
    .quote-box {
      margin-top: 3rem;
      padding: 2rem;
      background: #f0f7f4;
      border-radius: 12px;
      text-align: center;
    }
    blockquote {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      color: #0a6847;
      font-style: italic;
    }
    cite { display: block; margin-top: 1rem; color: #666; }
  `]
})
export class FoodComponent {
  foods = [
    { emoji: '🍚', name: 'Jollof Rice', description: 'The king of Nigerian dishes. Smoky, spicy, and always sparking debates with our Ghanaian friends about who makes it better.' },
    { emoji: '🫕', name: 'Pounded Yam & Egusi', description: 'Smooth, stretchy pounded yam paired with rich egusi soup loaded with spinach, stockfish, and assorted meats.' },
    { emoji: '🥘', name: 'Pepper Soup', description: 'A fiery, aromatic broth made with goat meat or catfish. The perfect remedy for cold harmattan evenings.' },
    { emoji: '🫓', name: 'Eba & Okra Soup', description: 'Garri turned into a smooth swallow, served with thick, draw okra soup. A staple across many Nigerian homes.' },
    { emoji: '🥜', name: 'Suya', description: 'Spicy grilled meat skewers coated in ground peanuts and spices. The ultimate Nigerian street food, best enjoyed at night.' },
    { emoji: '🫘', name: 'Moi Moi', description: 'Steamed bean pudding made from blended black-eyed peas, peppers, and spices. A beloved side dish at every Nigerian party.' }
  ];
}
