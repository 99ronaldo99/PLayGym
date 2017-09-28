import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'dialog-alert',
  templateUrl: 'alert.html',
})
export class DialogAlert {

  constructor(
    public dialogRef: MdDialogRef<DialogAlert>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

		  onNoClick(): void {
		    this.dialogRef.close();
		  }

}