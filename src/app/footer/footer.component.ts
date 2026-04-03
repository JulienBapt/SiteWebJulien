import { Component } from '@angular/core';

export interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  author = 'Chritine Rigal';
  year = new Date().getFullYear();

  links: FooterLink[] = [
    { label: 'Presse',           href: '#presse'   },
    { label: 'Contact',          href: '#contact'  },
    { label: 'Mentions légales', href: '#mentions' },
  ];
}
