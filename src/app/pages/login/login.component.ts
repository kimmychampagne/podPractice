import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http-provider';
import { Platform } from 'ionic-angular';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  authData: any;

  constructor(public navCtrl: NavController, private httpProvider:HttpProvider, public loadingCtrl: LoadingController, platform: Platform) {
      this.loading = this.loadingCtrl.create({
          content: `<ion-spinner ></ion-spinner>`
      });

      this.getdata();
   }

  ngOnInit() {
      getData(){
          this.loading.present();
          this.httpProvider.getLocalData().subscribe(
              result => {
                  this.authData=result.children;
                  console.log("Success : "+this.authData);
              },
              err =>{
                  console.log("Error: "+err);
              } ,
              () => {
                  this.loading.dismiss();
                  console.log('getData completed');
              }
          );
      };
  }

}
