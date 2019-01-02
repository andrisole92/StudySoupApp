import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

interface School {
  name: string,
  city: string
}

interface Course {
  name: string,
  examDate: any
}

interface UserProfile {
  school: string;
  courses: Course[];
}

interface User {
  email: string,
  deviceId: string,
  deviceToken: string
}

interface Booking {
}

@Injectable()
export class ServerInterfaceProvider {
  schools: any;

  constructor(public http: HttpClient) {
    this.schools = Schools;
  }


  authenticateUser() {
    // authenticates
  }

  // log's in
  login() {
  }

  // registers a user
  registerUser() {
  }

  // get courses by regex
  getCourses(str: string) {
  }

  // get schools by regex
  getSchools(str: string) {
  }

  // sends the booking
  saveBooking(booking: Booking) {
  }

  //returns the current booking
  getBooking() {
  }

  //returns the booking by id
  getBookingById() {
  }

  // returns list of all bookings
  getBookings() {
  }

  // sends a token, email, and amount to the client
  billClient(email: string, token: string, amount: number) {
  }

}


class Bookings {
}

class Schools {
}

class Courses {
}

class Users {
}
