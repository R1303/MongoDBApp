import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyOwnGallery';
 firebaseConfig = {
    apiKey: 'AIzaSyD2mSjy3rvTPSlB_nEK36jtnJ7y5U5Ud6Y',
    authDomain: 'mongodb-app-370902.firebaseapp.com',
    projectId: 'mongodb-app-370902',
    storageBucket: 'mongodb-app-370902.appspot.com',
    messagingSenderId: '856988881995',
    appId: '1:856988881995:web:4eef0ddd3bf3abb6cfe9ce',
    measurementId: 'G-6ZG2TRZLDW'
  };

   app = initializeApp(this.firebaseConfig);
   analytics = getAnalytics(this.app);

   constructor(private newService: CommonService, private router: Router){}
   Repdata;
   valbutton = 'Save';

ngOnInit(){
   this.newService.GetUser().subscribe(data => this.Repdata = data);
}



onSave = function(user, isValid: boolean){
  user.mode = this.valbutton;
  this.newService.saveUser(user).subscribe(data => { alert(data.data);
                                                     this.ngOnInit();
}
, error => this.errorMessage = error);
};

edit = function(kk){
  this.id = kk._id;
  this.name = kk.name;
  this.address = kk.address;
  this.valbutton = 'Update';
};

delete = function(id){
 this.newService.deleteUser(id).subscribe(data => { alert(data.data);
                                                    this.ngOnInit();
}
, error => this.errorMessage = error);
};


clickLink(pageName){
  this.router.navigate([pageName]);
}
}
