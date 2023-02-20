import { E } from '@angular/cdk/keycodes';

export class DataFile {
  id: number;
  file: File;
  base64: string;
  isLarge: Boolean = false;
  error: boolean = false;
  percent?: string;
}
export class FileModel {
  file: File;
  index: number;
}
