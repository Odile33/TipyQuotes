import { Component, OnInit,Output,EventEmitter, Input  } from '@angular/core';
import { from } from 'rxjs';
import { Userquote} from '../userquote';
import { QuotingService } from '../quoting.service';
import { Quote } from '@angular/compiler';

@Component({
  selector: '.app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {
  
  userquoteModel = new Userquote ('','','');
  @Input () UserquoteModel = Userquote
  @Output() emitUserquote= new EventEmitter<Userquote>()
  quoteStr:string
  quotePublisher:string
  quoteAuthor:string
  theQuote:any

  
  onSubmit(){
    this.emitUserquote.emit(this.userquoteModel);
  }
  constructor(/*private _quotingService: QuotingService*/){

  }
  /*
  onSubmit(){
    
    this. _quotingService.quotings(this.userquoteModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
      
    )
  }
  */

  

  ngOnInit(): void {
  }

}
