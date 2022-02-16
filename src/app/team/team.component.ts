import { Component, OnInit, Input } from '@angular/core';    //Input is a decorator, used to specify the data that we want to get passed into the component

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: string[] = [];                             
  @Input() index = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
