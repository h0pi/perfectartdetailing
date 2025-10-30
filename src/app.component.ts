import {Component, ChangeDetectionStrategy, signal, OnInit, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string; // SVG path
  title: string;
  description: string;
}
interface PriceListItem {
    name: string;
    description?: string;
    price: string;
}

interface PriceCategory {
    title: string;
    items: PriceListItem[];
}

interface GalleryImage {
  src: string;
  alt: string;
  tag: 'Before' | 'After';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AppComponent implements AfterViewInit {
  readonly videoSrc = 'assets/videos/video.mp4';

  readonly services = signal<Service[]>([
    {
      icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Exterior Perfection Polish',
      description: 'Multi-stage paint correction to remove swirls, scratches, and imperfections, restoring a deep, mirror-like shine.'
    },
    {
      icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
      title: 'Interior Deep Cleanse',
      description: 'Comprehensive steam cleaning, shampooing, and conditioning of all interior surfaces for a factory-fresh feel and smell.'
    },
    {
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
      title: 'Ceramic Coating Protection',
      description: 'Application of professional-grade ceramic coating for unparalleled gloss, hydrophobicity, and years of protection.'
    }
  ]);

  readonly galleryImages = signal<GalleryImage[]>([
    { src: 'assets/images/seat-before.png', alt: 'Dull car paint before detailing', tag: 'Before' },
    { src: 'assets/images/seat-after.png', alt: 'Glossy car paint after detailing', tag: 'After' },
    { src: 'assets/images/dent-before.png', alt: 'Dirty car interior before cleaning', tag: 'Before' },
    { src: 'assets/images/dent-after.png', alt: 'Clean car interior after detailing', tag: 'After' },
    { src: 'assets/images/polish-before.png', alt: 'Car with swirl marks', tag: 'Before' },
    { src: 'assets/images/polish-after.png', alt: 'Car with paint correction', tag: 'After' },
    { src: 'assets/images/far-before.png', alt: 'Stained car seat', tag: 'Before' },
    { src: 'assets/images/far-after.png', alt: 'Cleaned car seat', tag: 'After' },
  ]);
    readonly showPriceList = signal(false);

    readonly priceList = signal<PriceCategory[]>([
        {
            title: 'Services (A la carte)',
            items: [
                { name: 'Quick Exterior Wash', description: 'manual wash + drying', price: 'Small: 15€ · Medium: 20€ · Large/SUV: 25€' },
                { name: 'Full Exterior Wash + Wax', description: 'wash + wax', price: 'Small: 40€ · Medium: 55€ · Large/SUV: 70€' },
                { name: 'Clay Bar Treatment', description: 'paint decontamination', price: 'Small: 60€ · Medium: 80€ · Large: 100€' },
                { name: 'Polishing', description: 'single-stage / paint correction', price: 'Small: 120€ · Medium: 160€ · Large: 200€' },
                { name: 'Paint Correction', description: '2-step / scratch and hologram removal', price: 'Small: 260€ · Medium: 340€ · Large: 420€' },
                { name: 'Ceramic Coating', description: 'nano coating — 1-year protection application', price: 'Small: 450€ · Medium: 650€ · Large: 850€' },
                { name: 'Interior Deep Clean', description: 'deep vacuuming, fabric/leather cleaning, disinfection', price: 'Small: 80€ · Medium: 110€ · Large: 140€' },
                { name: 'Steam Clean + Shampoo', description: 'deep upholstery cleaning', price: 'Small: 90€ · Medium: 120€ · Large: 150€' },
                { name: 'Leather Treatment', description: 'cleaning and protection for leather seats', price: 'Full set of seats: 70–120€ (depending on condition)' },
                { name: 'Engine Bay Clean', description: 'engine compartment cleaning', price: 'Fixed: 40–70€' },
                { name: 'Headlight Restoration', description: 'headlight renewal', price: 'Per pair: 60–120€ (depending on damage)' },
                { name: 'Resin/Insect/Bird Dropping Removal', description: 'detail spot treatment', price: 'Per treatment: 15–50€' }
            ]
        },
        {
            title: 'Packages (Most Popular)',
            items: [
                { name: 'Basic Detailing', description: 'wash, vacuum, basic plastic cleaning, windows', price: 'Small: 45€ · Medium: 60€ · Large: 75€' },
                { name: 'Premium Detailing', description: 'Full exterior wash + clay bar + interior deep clean + leather treatment', price: 'Small: 220€ · Medium: 300€ · Large: 380€' },
                { name: 'Ultimate Showroom', description: 'Paint correction (single/2-step), polishing, ceramic coating (basic class), complete interior deep clean', price: 'Small: 700€ · Medium: 900€ · Large: 1,150€' }
            ]
        },
        {
            title: 'Add-ons & Options (a la carte)',
            items: [
                { name: 'Pickup & Drop-off', description: 'vehicle delivery', price: 'by agreement / fixed 10–30€' },
                { name: 'Instant Deodorizer / Ozone Treatment', price: '20–60€' },
                { name: 'Tar and Paint Touch-up', description: 'minor paint repairs', price: 'from 30€' },
                { name: 'Seasonal Protection Package', description: 'winter protection + lubrication', price: '60–120€' }
            ]
        }
    ]);
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
    ngAfterViewInit(): void {
        const video = document.querySelector('video');
        if (video instanceof HTMLVideoElement) {
            video.muted = true;       // garantuje da je bez zvuka
            video.volume = 0;         // dodatno spusti glasnoću
            video.play().catch(err => console.warn('Autoplay prevented:', err));
            video.addEventListener('ended', () => video.play()); // loop fallback
        }

}
}
