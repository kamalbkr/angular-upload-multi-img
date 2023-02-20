import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,public domSanitizer:DomSanitizer) { }

  ngOnInit() {
  
  }
delete(){
  this.dialogRef.close(true)
}
}