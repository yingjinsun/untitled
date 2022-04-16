import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit,OnChanges {
  @Input() page_precent: any;
  @Input() page_items: any;
  @Input() doMinusScore: ((args: any) => void) | undefined;
  @Input() rightAns: any;
  @Input() doNextPage: any;
  disabled:boolean = true;
  constructor(private cd: ChangeDetectorRef) {
    this.cd.markForCheck();
  }

  tacklePage= (judge:any)=>{
    console.log("tacklePage")
    if (judge){
      console.log("canNext")
      this.disabled=false;
    }
    else{
      console.log("call doMinusScore")
      console.log(this.doMinusScore)
      // @ts-ignore
      this.doMinusScore();
    }
    this.cd.markForCheck();

  }


  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.disabled=true;
  }

}
