import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  introSeen = true;
  INTRO_KEY = 'intro-seen';

  constructor(
    private router: Router,
    private navCtr: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    await this.checkStorage();
  }

  async checkStorage() {
    try {
      const seen = await Preferences.get({ key: this.INTRO_KEY });
      this.introSeen = seen.value === 'true';
      console.log('Intro déjà vu:', this.introSeen);
    } catch (error) {
      console.error('Erreur storage:', error);
      this.introSeen = true;
    }
  }

  async doLogin() {
    const loading = await this.loadingCtrl.create({
      message: 'Connexion en cours...',
      spinner: 'crescent',
    });
    await loading.present();

    try {
      // Simulation de connexion
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.navCtr.navigateRoot('/home'); // Rediriger vers home
    } finally {
      await loading.dismiss();
    }
  }

  async onFinish() {
    this.introSeen = true;
    await Preferences.set({ key: this.INTRO_KEY, value: 'true' });
  }

  async seeIntroAgain() {
    this.introSeen = false;
    await Preferences.remove({ key: this.INTRO_KEY });
  }
}