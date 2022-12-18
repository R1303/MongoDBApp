import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin=false
  errorMsg='Invalid Credential'
  progress = 0;
  progressBar = document.querySelector('.progress-bar');
  intervalId;
  showProgress:boolean;
  doNotShowLoginForm:boolean;
  showSpinner:boolean;
  constructor(private router:Router,private newService: CommonService) { }
  
  ngOnInit() {
  }
  handleJWTBasicAuthLogin(user){
    this.invalidLogin=false;
    this.showProgress=true;
    this.doNotShowLoginForm=true;
    this.showSpinner=true;
    this.newService.adminLogin(user.username).subscribe(
      data =>{
        const getDownloadProgress = () => {
          if (this.progress <= 5) {
            console.log(this.progress)
            this.progress = this.progress + 1;
            this.showProgress=true;
            this.doNotShowLoginForm=true;
           this.showSpinner=true;
          }
          else {
            clearInterval(this.intervalId);
            this.showProgress=false;
            this.doNotShowLoginForm=false;
            this.invalidLogin=false;
            this.showSpinner=false;
          }
        }
        if(data!=null){
        this.newService.authenticate(this.username,this.password);
        this.showSpinner=false;
        this.router.navigate(['admin']);
        this.invalidLogin=false
        }
        else{
        this.showSpinner=false;
        this.doNotShowLoginForm=false;
        this.invalidLogin=true;
        this.username='';
        this.password='';
          }
      },
      error =>{
        this.showSpinner=false;
        this.doNotShowLoginForm=false;
        this.invalidLogin=true;
        this.username='';
        this.password='';
      }
    );
  }


}