import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { DataFile, FileModel } from './models/DataFile';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalService],
})
export class AppComponent {
  public files: any[] = [];

  constructor(private _globalService: GlobalService) {}
  onFileChange(uploadedFiles: EventTarget) {
 
    const target = uploadedFiles as HTMLInputElement;
    this.files = [
      ...this.files,
      ...Object.keys(target.files).map((key) => target.files[key]),
    ];

    this.files = this.files.map((m, i) => {
      // if(m.type.includes("image/"))
      return {
        file: m,
        index: i,
      };
    });
  }

  upload(fileinput) {
    if (fileinput) {
      fileinput.value = '';
      fileinput.click();
    }
  }

  saveFile(event: DataFile) {
    let formData = new FormData();
    formData.append('file', event.file);

    this._globalService.saveFileToDB(formData).subscribe({
      next: (data) => {
        if (data.type === HttpEventType.UploadProgress) {
          event.percent = Math.round((100 * data.loaded) / data.total) + '%';
        } else if (data instanceof HttpResponse) {
          delete event.percent;
        }
      },
      error: () => {
        event.error = true;
        delete event.percent;
      },
    });
  }
  deleteFile(event: DataFile) {
    this.files = this.files.filter((f: FileModel) => f.index != event.id);
  }
}
