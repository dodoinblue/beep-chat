import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>

  constructor(private database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true
    } catch(e) {
      console.log(e)
      return false
    }
  }

}
