import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // Navigating using Router
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.router.navigate(['/places/tabs/discover']); // An alternative way

    // Navigating using NavController
    // this.navCtrl.navigateBack('/places/tabs/discover'); // this plays a nice back transition effect.

    // here i want to use our component as model
    this.modalCtrl.create({ component: CreateBookingComponent }).then(modalEl => {
      modalEl.present();
    });
  }
}
