import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-daily-life',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <h1>Daily Life</h1>
      <p>A day in the life of a typical Nigerian</p>
    </section>

    <section class="content">
      <div class="timeline">
        <div class="timeline-item" *ngFor="let item of timeline; let i = index">
          <div class="time">{{ item.time }}</div>
          <div class="event">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="realities">
        <h2>Nigerian Realities</h2>
        <div class="reality-grid">
          <div class="reality" *ngFor="let r of realities">
            <span class="icon">{{ r.icon }}</span>
            <h4>{{ r.title }}</h4>
            <p>{{ r.text }}</p>
          </div>
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
    .content { max-width: 760px; margin: 3rem auto; padding: 0 2rem; }
    .timeline { position: relative; padding-left: 2rem; border-left: 3px solid #0a6847; }
    .timeline-item { margin-bottom: 2rem; position: relative; }
    .timeline-item::before {
      content: '';
      width: 14px;
      height: 14px;
      background: #0a6847;
      border-radius: 50%;
      position: absolute;
      left: -2.55rem;
      top: 0.3rem;
    }
    .time {
      font-weight: 600;
      color: #0a6847;
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
    .event h3 { font-size: 1.1rem; margin-bottom: 0.3rem; }
    .event p { color: #555; }
    .realities { margin-top: 4rem; }
    .realities h2 { text-align: center; color: #0a6847; margin-bottom: 2rem; }
    .reality-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .reality {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .icon { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
    .reality h4 { color: #0a6847; margin-bottom: 0.5rem; }
    .reality p { color: #555; font-size: 0.9rem; }
  `]
})
export class DailyLifeComponent {
  timeline = [
    { time: '5:30 AM', title: 'Morning Prayers', description: 'The day starts early. Whether Christian or Muslim, morning devotion is a cornerstone. The sound of prayers and hymns fills the air before dawn fully breaks.' },
    { time: '6:30 AM', title: 'Prepare for the Day', description: 'Boil water, iron clothes (with NEPA willing to provide electricity), eat a quick breakfast of bread and tea or akara and pap.' },
    { time: '7:30 AM', title: 'The Commute', description: 'Navigating traffic in danfo buses, okadas, or keke napep. Lagos traffic is legendary, but even smaller towns have their morning rush.' },
    { time: '8:00 AM - 5:00 PM', title: 'Work & Hustle', description: 'Nigerians are some of the hardest working people on earth. From corporate offices to market stalls, everyone is grinding to make a living.' },
    { time: '6:00 PM', title: 'Evening Wind-Down', description: 'Return home, catch up with family, watch the evening news or a Nollywood film. The generator might come on if NEPA takes the light.' },
    { time: '8:00 PM', title: 'Dinner & Family Time', description: 'Gather around for the evening meal. Share stories of the day. Laughter fills the room. This is where memories are made.' }
  ];

  realities = [
    { icon: '⚡', title: 'Power (NEPA/PHCN)', text: 'Electricity is unpredictable. Generators are a second currency. "Up NEPA!" is a national celebration cry.' },
    { icon: '💪', title: 'Resilience', text: 'Nigerians find a way. No matter the challenge, the hustle spirit and creativity always prevail.' },
    { icon: '😂', title: 'Humour', text: 'We laugh through everything. Nigerian humour is a survival mechanism and an art form.' },
    { icon: '🤝', title: 'Owanbe Culture', text: 'Nigerians love to celebrate. Weddings, birthdays, funerals — any occasion is a reason to dress up and party.' }
  ];
}
