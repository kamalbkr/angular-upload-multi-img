import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';
import { DataFile, FileModel } from '../models/DataFile';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnInit {
 @Input() image:FileModel;
 @Output() save = new EventEmitter<DataFile>();
 @Output() delete = new EventEmitter<DataFile>();
 public imageData:DataFile;
 private readonly MAX_SIZE=400000
  constructor(public domSanitizer: DomSanitizer,private dialog_:MatDialog,private _globalService : GlobalService) {}

get onLoading(){
   return this.imageData?.percent || this.imageData?.error || this.imageData?.isLarge
  
}
  ngOnInit() {   
    this.setDataImage()

  } 
setDataImage(){
  console.log("aaa",this.image.file);
   
     this.readFile(this.image.file).subscribe(data => {
      let isLarge = this.image.file.size > this.MAX_SIZE
      this.imageData = {id:this.image.index, base64: data,  file: this.image.file, percent: "1%", error: false, isLarge: isLarge } 
      if(!isLarge)
       this.save.emit(this.imageData)
    }) 
} 
deleteImage(){
  this.dialog_.open(DeleteDialogComponent,{
    disableClose:true,
    data:{title:'Confirmation',
    message:'Are you sure want to delete this image ?',
    image64:  this.imageData.base64 
  }

  }).afterClosed().subscribe(output=>{
    if(output)
     this.delete.emit(this.imageData)
  })
}
readFile(file: File): Observable<string> {
  return new Observable(obs => {
    const reader = new FileReader();
    reader.onload = () => {
      obs.next(reader.result as string);
      obs.complete();
    }
    if(file)
    reader.readAsDataURL(file);
  });
}
}