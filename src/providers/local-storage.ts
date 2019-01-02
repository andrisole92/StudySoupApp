import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {

  constructor(private storage: Storage) {
  }

  get school(): any {
    return this.storage.get('school');
  }

  set school(val) {
    this.storage.set('school', val);
  }

  get courses(): any {
    return this.storage.get('courses');
  }

  set courses(val) {
    this.storage.set('courses', val);
  }

  get schoolList(): any {
    return this.storage.get('schoolList');
  }
  set schoolList(val) {
    this.storage.set('schoolList', val);
  }

  get user(): any {
    return this.storage.get('user');
  }
  set user(val) {
    this.storage.set('user', val);
  }

  get lang(): any {
    return this.storage.get('lang');
  }

  set lang(val) {
    this.storage.set('lang', val);
  }

}
