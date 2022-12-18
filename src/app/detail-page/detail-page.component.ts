import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private newService:CommonService) { }
  Repdata;
  showSpinner:boolean;

  ngOnInit(): void {
    this.showSpinner=true;
    this.newService.GetUser().subscribe(data =>{ this.Repdata = data;this.showSpinner=false;});
  }

}
