import { Component, OnInit } from '@angular/core';
import { Userquote} from '../userquote';

@Component({
  selector: '.app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  userquoteModel = new Userquote ('Annie','The brighter the smile the happier the heart','Annie');

  constructor() { }

  ngOnInit(): void {
  }

}
