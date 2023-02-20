import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PreviewImageComponent } from './preview-image/preview-image.component';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './preview-image/dialog/delete-dialog/delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  declarations: [PreviewImageComponent, AppComponent, DeleteDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
