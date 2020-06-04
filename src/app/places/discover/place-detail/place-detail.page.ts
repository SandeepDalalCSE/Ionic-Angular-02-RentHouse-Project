import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // Navigating using Router
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.router.navigate(['/places/tabs/discover']); // An alternative way

    // Navigating using NavController
    // this.navCtrl.navigateBack('/places/tabs/discover'); // this plays a nice back transition effect.

    // here i want to use our component as model and using componentProps passing data to the component
    this.modalCtrl.create(
      {
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place } // Now this is passes as property to the create-booking component
      }).then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      }).then(resultData => {
        console.log(resultData.data, resultData.role); // finding which button was clicked on modal.

        if (resultData === 'confirm') {
          console.log('booked!');
        }
      });
  }
}
