import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <h1>Culture & Traditions</h1>
      <p>The rich heritage of Akoko Edo and Nigeria</p>
    </section>

    <section class="content">
      <div class="culture-item" *ngFor="let item of cultureItems">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
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
    .content { max-width: 760px; margin: 3rem auto; padding: 0 2rem; }
    .culture-item {
      margin-bottom: 2.5rem;
      padding: 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 4px solid #0a6847;
    }
    .culture-item h2 { color: #0a6847; margin-bottom: 0.8rem; font-size: 1.4rem; }
    .culture-item p { color: #444; }
  `]
})
export class CultureComponent {
  cultureItems = [
    {
      title: 'The People of Akoko Edo',
      description: 'Akoko Edo is a local government area in the northern part of Edo State. The people are known for their warmth, hard work, and deep respect for tradition. Communities like Igarra, Ibillo, Lampese, and Ogbe are vibrant cultural centres where traditions have been passed down for generations.'
    },
    {
      title: 'Language & Identity',
      description: 'Nigeria has over 500 languages. In Akoko Edo, various dialects are spoken alongside Pidgin English and standard English. Language is identity — it connects you to your roots, your family, and your ancestors. Greeting an elder in your mother tongue carries a weight that English simply cannot match.'
    },
    {
      title: 'Festivals & Celebrations',
      description: 'From the colourful masquerade festivals to harvest celebrations, Akoko Edo comes alive with culture. These festivals are not just entertainment — they are a way of preserving history, honouring ancestors, and bringing communities together. Drumming, dancing, and storytelling fill the air.'
    },
    {
      title: 'Respect for Elders',
      description: 'In Nigerian culture, respect is non-negotiable. You greet your elders first thing in the morning. You kneel or bow. You do not call them by their first name. This deep reverence for age and wisdom is woven into every interaction and is one of the most defining aspects of growing up Nigerian.'
    },
    {
      title: 'Community Spirit',
      description: 'The saying "it takes a village to raise a child" is lived daily in Nigeria. Your neighbour\'s mother is your mother. The community watches over every child. Celebrations are shared, grief is shared, and no one faces life alone. This communal bond is the backbone of Nigerian society.'
    }
  ];
}
