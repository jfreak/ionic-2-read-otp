import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';


// declare var OTPAutoVerification: any;
declare var window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public events: Events) {
  }

  ionViewWillEnter() {
    document.addEventListener('onSMSArrive', this.smsArived);
  }

  smsArived = (result: any) => {

    let sms = result.data;

    //OTP TEXT = Your OTP code is 565329. Please do not share it with anyone.
    //Length of otp code it can vary
    let otp_length = 6;
    // Split text with code is delimiter
    let otp_text = (sms.body).split("code is").pop();
    // Get code
    let otp_code = otp_text.substring(0, otp_length);

    // Get Sender ID Eg VX-WAYSMS
    let sender = (sms.address).split("-").pop();
    alert(JSON.stringify(otp_code));
    alert(JSON.stringify(sender));
    // Using these value you can process data
  }
}
