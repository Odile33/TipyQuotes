import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { from } from 'rxjs';
import { Userquote} from '../userquote';
import { QuotingService } from '../quoting.service';

@Component({
  selector: '.app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  userquoteModel = new Userquote ('Annie','The brighter the smile the happier the heart','Annie');
  @Output() emitUserquote= new EventEmitter()
  quoteStr:string
  quotePublisher:string
  quoteAuthor:string
  theQuote:any

  
  onSubmit(  ){
    this.theQuote= new Userquote(this.quotePublisher,this.quoteAuthor,this.quoteStr)
    this.quoteStr=''
    this.quoteAuthor=''
    this.quotePublisher=''
    this.emitUserquote.emit(this.theQuote)
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
