import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  description: string;
}

interface ContactInfo {
  title: string;
  content: string[];
  hasLineInfo: boolean;
}

@Component({
  selector: 'tps-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  menuItems = signal<MenuItem[]>([
    {
      title: 'Premium Spirits',
      description:
        'ウイスキー、ブランデー、ジンなど、世界最高峰のスピリッツを取り揃えております。',
    },
    {
      title: 'Premium Sake',
      description:
        '日本各地から厳選された日本酒コレクション。季節や料理に合わせた特別な一杯をお楽しみください。',
    },
    {
      title: 'Matcha Delights',
      description:
        'バーの締めにぴったりな特製抹茶ドリンク。濃厚な抹茶の風味と上品な苦みで、心地よい余韻をお楽しみください。',
    },
    {
      title: 'Light Bites',
      description:
        'お酒に合う軽食やおつまみ。シェフが手がける上質な料理で、お酒の時間をより豊かに。',
    },
  ]);

  contactInfo = signal<ContactInfo[]>([
    {
      title: '営業時間',
      content: ['月〜土: 18:00 - 24:00'],
      hasLineInfo: true,
    },
    {
      title: 'お問い合わせ',
      content: [
        'Tel☏: 011-496-8039',
        'Phone☎: 080-9356-0707',
        'Email: info@tipsy-bar.com',
      ],
      hasLineInfo: false,
    },
    {
      title: 'アクセス',
      content: [
        '札幌市中央区南4条西3丁目1-1',
        '第3グリーンビル 6F',
        '地下鉄南北線 すすきの駅 徒歩5分',
      ],
      hasLineInfo: true,
    },
  ]);

  // Modern event handlers with arrow functions
  scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
}
