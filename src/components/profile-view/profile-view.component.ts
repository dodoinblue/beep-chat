import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
  
  userProfile: Profile;
  loader: Loading;
  @Output() existingProfile: EventEmitter<Profile>

  constructor(private loading: LoadingController, private data: DataService, private auth: AuthService) {
   this.loader = this.loading.create({
     content: 'Loading profile...'
   });

   this.existingProfile = new EventEmitter<Profile>();
  }

  ngOnInit(): void {
    this.loader.present();
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });
  }

}
