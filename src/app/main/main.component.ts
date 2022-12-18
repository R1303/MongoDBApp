import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showSpinner:boolean;
  constructor(private newService: CommonService, private router:Router){}
  Repdata;
  valbutton = 'Save';
  name;
  address;
  id;


ngOnInit(){
  this.showSpinner=true;
  this.newService.GetUser().subscribe(data =>{ this.Repdata = data;this.showSpinner=false;});
  //this.newService.GetServiceData().subscribe(data => alert(data));
  this.name = '';
  this.address = '';
  this.valbutton = 'Save';

}

onSave = function(user){
 user.mode = this.valbutton;
 this.showSpinner=true;
 if(user.name!='' && user.address!='' && user.mode == "Save"){
 this.newService.saveUser(user).subscribe(data => { alert(data.data);
                                                    this.ngOnInit();
}
, error => this.errorMessage = error);
 }
 else if(this.name!='' && this.address!='' && user.mode == "Update"){
  this.newService.saveUser(user).subscribe(data => { alert(data.data);
                                                     this.ngOnInit();
 }
 , error => this.errorMessage = error);
  }
 else {
  this.showSpinner=false;
 alert("Please Enter All Records !!")
 }
};

edit = function(kk){
 this.id = kk._id;
 this.name = kk.name;
 this.address = kk.address;
 this.valbutton = 'Update';
};

delete = function(id){
  this.showSpinner=true;
this.newService.deleteUser(id).subscribe(data => { alert(data.data);
                                                   this.ngOnInit();
}
, error => this.errorMessage = error);
};

clickLink(pageName){
  sessionStorage.removeItem("verifiedUser");
  this.router.navigate([pageName]);
}



}
