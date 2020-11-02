import { Component, OnInit } from '@angular/core';
import { Userquote} from '../userquote';
@Component({
  selector: '.app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[new Userquote("Annie","The brighter the smile the happier the heart","Annie"),
  new Userquote("Ange","The brighter the smile the happier the heart","Ange")]
    fNum:number
    lNum:number
    counter:number

  addQuote(Userquote){
    this.quotes.push(Userquote)
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
    this.fNum = 0
    this.lNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lNum = this.quotes[this.counter].upvotes;
      if(this.lNum > this.fNum){this.fNum = this.lNum}
    }
    return  this.fNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
