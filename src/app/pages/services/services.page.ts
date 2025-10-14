import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicesService, ServiceItem } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    NgFor
  ]
})
export class ServicesPage {
  services: ServiceItem[] = [];

  constructor(private serviceService: ServicesService, private router: Router) {}

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  openDetail(id: number) {
    this.router.navigate(['/service-detail', id]);
  }
}
