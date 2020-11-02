import { Component, OnInit } from '@angular/core';
import { Userquote} from '../userquote';
@Component({
  selector: '.app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[new Userquote("Annie","The brighter the smile the happier the heart","Annie"),
  new Userquote("Annie","The brighter the smile the happier the heart","Annie")]
    preNum:number
    lastNum:number
    counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
