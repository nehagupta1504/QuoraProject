import { Component, OnInit } from '@angular/core';
import{HttpHeaders,HttpClient} from '@angular/common/http';
import {PageServiceService} from '../services/page-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { retry, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-quora-page',
  templateUrl: './quora-page.component.html',
  styleUrls: ['./quora-page.component.css']
})
export class QuoraPageComponent implements OnInit {
  quoraPostData : FormGroup;
  constructor( private http : HttpClient,private pageService : PageServiceService) { }
  public data =  {
    "Title" : "title1",
    "Description" : "Description1"
  }
  ngOnInit() {
    this.quoraPostForm();
   
  }
  get f() { return this.quoraPostData.controls; }
  onSubmit(){
    console.log(this.quoraPostData.value);
    console.log("Hello");
    console.log(JSON.stringify(this.quoraPostData.value));
    this.pageService.postData(this.quoraPostData.value).subscribe((res)=>{
      console.log(res);
      alert(res);
    });
  }
  private quoraPostForm(){
    this.quoraPostData = new FormGroup({
      'postTitle': new FormControl(null, Validators.required),
      'postDescription' : new FormControl(null, Validators.required),
      'fixContent' : new FormControl("All the best and leave your solution in the comments! \n—————————————————————————— \nFollow AlgoMart for more such interesting problems.")
    });
  }

}
