import { Component, OnInit } from '@angular/core';
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
  
  constructor(private _quotingService: QuotingService){

  }
  onSubmit(){
    this. _quotingService.quotings(this.userquoteModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
      
    )
  }

  

  ngOnInit(): void {
  }

}
