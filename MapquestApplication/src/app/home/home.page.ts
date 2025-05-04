import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/angular/standalone';
import { MapquestServiceService } from '../mapquest-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, CommonModule],
})
export class HomePage {
  dataItems: any;
  from = "";
  to = "";

  distance = 0;
  time = 0;
  
  currentItem: any;
  currentData = "";

  constructor(private mapquest: MapquestServiceService) {}
  setFrom(value:string)
  {
    this.from = value;
    console.log(this.from);
    this.search();
  }

  setTo(value:string)
  {
    this.to = value;
    console.log(this.to);
    this.search();


  }
  search() { 

    console.log("Search");
    if(this.from.length <= 0 || this.to.length <=0)
    {
      return;
    }

    try{

      console.log("trying");
      this.mapquest.getDirections(this.from,this.to)
      .subscribe(result => 
            {

              //even though we are getting a json object from the call
              //this ensures the data can be read properly
              let resultString = JSON.stringify(result);
              let data = JSON.parse(resultString);
              console.log(data);
              this.distance = data.route.distance;
              this.dataItems = data.route.legs[0].maneuvers;
              this.time = data.route.formattedTime;
            });
      }

    catch(e: unknown){
      console.log("error");
      console.log(e);
    }
  }

  setCurrent(item: any){
    console.log("current");
    this.currentItem = item;
    this.currentData = JSON.stringify(this.currentItem)
  }
  
}
