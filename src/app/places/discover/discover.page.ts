import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1); // We will not use this is ion-list.
  }

  onOpenMenu() {
    // this.menuCtrl.toggle(); // If only one menu is added with no id.
    this.menuCtrl.toggle('m1'); // menu with id= m1
  }
}
