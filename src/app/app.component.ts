import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //storing the state of our app
  newMemberName: string = '';
  members: string[] = [];

  //error handling
  errorMessage = '';
  errorMessage2 = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = []                //teams is going to contain an array of array of strings

  //event handling
  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {

    if(!this.newMemberName) {
      this.errorMessage = 'Name cannot be blank'
      return
    }
    
    this.errorMessage='';
    this.members.push(this.newMemberName)
    this.newMemberName=''
  }

  generateTeams() {
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage2 = 'Invalid number of teams';
      return
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage2 = 'Not enough members';
      return;
    }
    
    this.errorMessage2 = '';
    const allMembers = [...this.members]

    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length )
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;

        if(this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';              //deletes the inputs after the teams have been generated




  }




}

