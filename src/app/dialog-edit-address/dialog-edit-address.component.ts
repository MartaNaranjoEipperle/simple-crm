import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  user!: User;
  loading = false;
  userId!:string;
  constructor( private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditAddressComponent> ) { }

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
    .update({ street: this.user.street, zipCode: this.user.zipCode, city: this.user.city })
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
