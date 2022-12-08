import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'team-generator';
  newMember: string = '';
  memberList: string[] = [];
  errorMsg: string = '';
  noOfTeams: number = 0;
  teams: string[][] = [[]];

  InputHandler(val: string) {
    // console.log(val);
    this.newMember = val;
  }

  InputNoOfTeamsHandler(val: string) {
    this.noOfTeams = Number(val);
  }

  addMember() {
    console.log(this.newMember.length);
    if (this.newMember.length == 0) {
      this.errorMsg = 'Name input is empty :(';
      return;
    }

    this.memberList.push(this.newMember);
    this.newMember = '';
    // console.log(this.memberList)
  }

  operation() {
    if (!this.noOfTeams  || this.noOfTeams <= 0) {
    //  console.log("No of teams should be greater than zero.")
     this.errorMsg ="No of teams should be greater than zero.";
      return;
    }

    if(this.noOfTeams >this.memberList.length){
     this.errorMsg ="No of teams should be less than or equal to no of members.";
      return;
    }


    this.errorMsg ='';
    const allMemeberArr = [...this.memberList];
    

    while (allMemeberArr.length != 0) {
      for (let i = 0; i < this.noOfTeams; i++) {
        
        let randomIndex = Math.floor(Math.random() * allMemeberArr.length);
        let member = allMemeberArr.splice(randomIndex, 1)[0];
        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
        console.log(randomIndex);
      }
    }

    console.log(this.teams);
  }
}
