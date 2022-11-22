import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user = new User();
  birthDate!: number;
  loading = false;
  userId!:string;
  constructor( private firestore: AngularFirestore,  public dialogRef: MatDialogRef<DialogEditUserComponent> ) { }


  ngOnInit(): void {
    
      this.getUser();
    
  }

  getUser() {
  
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = user;
        console.log('user', user)
      });
  }

  saveUser(){
    this.loading = true;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update({ firstName: this.user.firstName, lastName: this.user.lastName, mail: this.user.mail, birthDate: this.user.birthDate })
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
