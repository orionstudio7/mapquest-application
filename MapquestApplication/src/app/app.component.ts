import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonList, IonRouterOutlet, CommonModule, IonItem, IonLabel],
})
export class AppComponent {
  constructor() {}
}

