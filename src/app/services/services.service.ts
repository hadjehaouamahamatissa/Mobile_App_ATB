import { Injectable } from '@angular/core';

export interface ServiceItem {
  id: number;
  titre: string;
  description: string;
  icone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private services: ServiceItem[] = [
    { id: 1, titre: 'Développement Web', description: 'Création de sites web modernes et rapides.', icone: 'code-slash' },
    { id: 2, titre: 'Maintenance Informatique', description: 'Assistance technique pour vos systèmes.', icone: 'construct' },
    { id: 3, titre: 'Design Graphique', description: 'Logos, flyers, identités visuelles.', icone: 'color-palette' },
    { id: 4, titre: 'Formation Tech', description: 'Formations en développement et design.', icone: 'school' }
  ];

  constructor() {}

  getServices(): ServiceItem[] {
    return this.services;
  }

  getServiceById(id: number): ServiceItem | undefined {
    return this.services.find(s => s.id === id);
  }
}
