import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { MdDialog } from '@angular/material'
import { DialogAlert } from '../../dialogs/alert/alert'




declare let $:any; 

@Injectable()
export class Utils{

  constructor( public dialog: MdDialog ){}

  showLoad(){
    $('.loader').addClass('active');
  }

  hideLoad(){
    $('.loader').removeClass('active');
  }

  isEmail(xmail){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(xmail)
  }

  alert(message){ 

    let dialogRef = this.dialog.open(DialogAlert, {
      width: '250px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => { 

    });
  
  }


}
