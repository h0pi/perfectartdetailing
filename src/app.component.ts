import {Component, ChangeDetectionStrategy, signal, OnInit, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string; // SVG path
  title: string;
  description: string;
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
    { src: 'https://picsum.photos/seed/car1before/600/400', alt: 'Dull car paint before detailing', tag: 'Before' },
    { src: 'https://picsum.photos/seed/car1after/600/400', alt: 'Glossy car paint after detailing', tag: 'After' },
    { src: 'https://picsum.photos/seed/car2before/600/400', alt: 'Dirty car interior before cleaning', tag: 'Before' },
    { src: 'https://picsum.photos/seed/car2after/600/400', alt: 'Clean car interior after detailing', tag: 'After' },
    { src: 'https://picsum.photos/seed/car3before/600/400', alt: 'Car with swirl marks', tag: 'Before' },
    { src: 'https://picsum.photos/seed/car3after/600/400', alt: 'Car with paint correction', tag: 'After' },
    { src: 'https://picsum.photos/seed/car4before/600/400', alt: 'Stained car seat', tag: 'Before' },
    { src: 'https://picsum.photos/seed/car4after/600/400', alt: 'Cleaned car seat', tag: 'After' },
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
