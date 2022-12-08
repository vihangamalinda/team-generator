import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-generator';
  newMember:string ='';
  memberList:string[]=[];
  errorMsg:string ='';

  InputHandler(val:string){
    console.log(val);
    this.newMember =val;
  }
   addMember() {
    console.log(this.newMember.length);
    if(this.newMember.length ==0){
      this.errorMsg = 'Name input is empty :(';
    return;
    }

    this.memberList.push(this.newMember);
    this.newMember ='';
    console.log(this.memberList)
   
    
  }
 
}


