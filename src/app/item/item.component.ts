import {Component, Input, OnInit} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data2:any ;
  @Input() rightAns:any;
  @Input() tacklePage: ((args: any) => void) | undefined;
  constructor(private cd: ChangeDetectorRef) {
  }

  doJudge=()=>{
    // @ts-ignore
    console.log("doJudge")
    console.log(this.data2)
    if (this.data2[1]==this.rightAns){
      // @ts-ignore
      this.tacklePage(true)
    }
    else{
      // @ts-ignore
      this.tacklePage(false)
    }
    this.cd.markForCheck();
  }
  ngOnInit(): void {
  }

}
