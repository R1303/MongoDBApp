import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  
  saveUser(user){
    let api_key = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjMjdkYjRkMTNmNTRlNjU3ZDI2NWI0NTExMDA4MGI0ODhlYjQzOGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNTQ5NTc3MjIwMTE1NDc0NjQ0IiwiZW1haWwiOiJyYWphbnJhbmFqaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlFHRTJxRWJYTjVMWjRwYTR3MGhqZXciLCJpYXQiOjE2NzEwNzYwMzQsImV4cCI6MTY3MTA3OTYzNCwianRpIjoiNzMzMmRlYjJkZGFkMTQxNGM3MGM0MGI2MTcxYWRjMTQ4NmNkNjM1NiJ9.ZnlyDmlKUsMUYQpyA5IURcRsU8tbvaLaH7wCcrCmn16noYABbdqOrpTUrHTXeZT-sf1f3Gg6PsgXCvpuOTRa4Nlztd8a1p3YLxcDaQEARoZOgXdO8PWHonY43E2Q7W7aKysEoRBvA6H12Cx16oB3QfwW5hCj2BrGPHOqN_9ExlTsfCtog_w6ZRsR3dQsVtjoybv-7Y74cEdUQsh8Ha2ATqlYoHC-ZMJlNZ-oPMGZTqP5NfoihMIz6d_gDlFmw1nij0NvLO6rTyNfWlKvOAWr-t-VaTu5IyBB3U7-Wtj9C0B2mAu5b7YiC436m3WINE_4vYtVd79P8JJz-pyXl-I7OA";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    const requestOptions = { headers: headers };
      return this.http.post('https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/SaveUser/', user,{ 'headers': headers }).pipe(map((response: Response) => response));
  }

  GetUser(){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/getUser/',requestOptions).pipe(map((response: Response) => response));
  }

  deleteUser(id){
    const headers = new HttpHeaders()
        .set('Content-Type','application/json')
       
      return this.http.post('https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/deleteUser/', {id},{ 'headers': headers }).pipe(map((response: Response) => response));
  }

  GetServiceData(){
    const headers = new HttpHeaders()
        .set('Content-Type','application/json')
        
    return this.http.get('https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/getServiceData/',{ 'headers': headers }).pipe(map((response: Response) => response));
}



   

   isUserLoggedIn(){
    var user=sessionStorage.getItem('verifiedUser')
    return !(user===null)
  }

  authenticate(username,password){
    //if(username==='Rajan' && password==="login"){
      sessionStorage.setItem('verifiedUser',username)
      return true;
   // }
   // return false;
  }

  saveAdmin(user){
    let api_key = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjMjdkYjRkMTNmNTRlNjU3ZDI2NWI0NTExMDA4MGI0ODhlYjQzOGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNTQ5NTc3MjIwMTE1NDc0NjQ0IiwiZW1haWwiOiJyYWphbnJhbmFqaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlFHRTJxRWJYTjVMWjRwYTR3MGhqZXciLCJpYXQiOjE2NzEwNzYwMzQsImV4cCI6MTY3MTA3OTYzNCwianRpIjoiNzMzMmRlYjJkZGFkMTQxNGM3MGM0MGI2MTcxYWRjMTQ4NmNkNjM1NiJ9.ZnlyDmlKUsMUYQpyA5IURcRsU8tbvaLaH7wCcrCmn16noYABbdqOrpTUrHTXeZT-sf1f3Gg6PsgXCvpuOTRa4Nlztd8a1p3YLxcDaQEARoZOgXdO8PWHonY43E2Q7W7aKysEoRBvA6H12Cx16oB3QfwW5hCj2BrGPHOqN_9ExlTsfCtog_w6ZRsR3dQsVtjoybv-7Y74cEdUQsh8Ha2ATqlYoHC-ZMJlNZ-oPMGZTqP5NfoihMIz6d_gDlFmw1nij0NvLO6rTyNfWlKvOAWr-t-VaTu5IyBB3U7-Wtj9C0B2mAu5b7YiC436m3WINE_4vYtVd79P8JJz-pyXl-I7OA";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    const requestOptions = { headers: headers };
      return this.http.post('https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/adminSave/', user,{ 'headers': headers }).pipe(map((response: Response) => response));
  }

  adminLogin(username){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username",username);
    return this.http.get(`https://us-central1-mongodb-app-370902.cloudfunctions.net/app/api/getAdminDetails/${username}`).pipe(map((response: Response) => response));
 
   }

}
