import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';







@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  item0:any=[["","Brandy"],["","Whiskey"],["","Rum"],["","Gin"],["","Tequila"],["","Vodka"]];
  item1:any=[["","Dry Vermouth"],["","Aperol"],["","Maraschino"]];
  item2:any=[["","funnel"],["","stick"],["","glass"],["","spoon"],["","MyEnglishSBad"]];
  item3:any=[["","Olives"],["","Orange"],["","Lime"]];
  pages:any=[this.item0,this.item1,this.item2,this.item3,""];
  score:any=100;
  right_ones:any=["Whiskey","Aperol","funnel","Lime",""];
  curr_idx:number=0;
  constructor(private cd: ChangeDetectorRef) { }
  doNextPage=()=> {
    console.log("doNextPage")
    this.curr_idx += 1;
    console.log(this.curr_idx)
    this.cd.markForCheck();
  }
  doMinusScore=()=>{
    console.log("doMinus")
    this.score-=5;
  }
  ngOnInit(): void {
  }

}
