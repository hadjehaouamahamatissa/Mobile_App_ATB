import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // ✅ très important !

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ContactService } from '../../services/contact.service';
import {
  AlertController,
  LoadingController,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  // imports: [
  //   CommonModule,
  //   ReactiveFormsModule,
  //   IonHeader,
  //   IonToolbar,
  //   IonButtons,
  //   IonMenuButton,
  //   IonTitle,
  //   IonContent,
  //   IonItem,
  //   IonLabel,
  //   IonInput,
  //   IonTextarea,
  //   IonButton,
  //   HttpClientModule
  // ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    // IonHeader,
    // IonToolbar,
    // IonButtons,
    // IonMenuButton,
    // IonTitle,
    // IonContent,
    // IonItem,
    // IonLabel,
    // IonInput,
    // IonTextarea,
    // IonButton,
  ]
}) 
export class ContactPage implements OnInit {
  contactForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async send() {
    if (this.contactForm.invalid) {
      const alert = await this.alertCtrl.create({
        header: 'Champs manquants',
        message: 'Veuillez remplir tous les champs obligatoires.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Envoi en cours...',
      spinner: 'circles',
    });
    await loading.present();

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: async (res: any) => {
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Succès ',
          message: 'Votre message a bien été envoyé !',
          buttons: ['OK'],
        });
        await alert.present();
        this.contactForm.reset();
        console.log('Message envoyé avec succès :', res);
      },
      error: async (err: any) => {
        await loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Erreur ',
          message: "Impossible d'envoyer votre message. Réessayez plus tard.",
          buttons: ['OK'],
        });
        await alert.present();
        console.error('Erreur:', err);
      },
    });
  }
}