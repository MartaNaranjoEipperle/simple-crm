import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { Ueser } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  Ueser = new Ueser();
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }
}
