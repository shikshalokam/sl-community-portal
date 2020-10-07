import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OverlayComponent } from '../../portal-shared/models/overlay/overlay.component';



@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  screenWidth: any;
  screenHeight: any;
  dialogRef: any;
  openModal: boolean = true;
  tabData = [
      {
        routerLink: '/workspace/create/details',
        label: 'details',
        tooltip: 'Learning Resources'
      },
      {
        routerLink: '/workspace/create/criteria',
        label: 'criteria',
        tooltip: 'criteria'
      },
      {
        routerLink: '/workspace/create/questions',
        label: 'questions',
        tooltip: 'Questions'
      },
      {
        routerLink: '/workspace/create/preview',
        label: 'preview',
        tooltip: 'Preview'
      }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 1000) {
      if(this.openModal)
      this.openDialog();
    } else  {
      this.dialog.closeAll();
      this.openModal = true;
    }
   
  }


  openDialog(): void {
     const dialogRef = this.dialog.open(OverlayComponent
      , {
        disableClose: true,
        width: '100%',
        height: '100%'
      });

      dialogRef.afterOpened().subscribe(result => {
        this.openModal = false;
    })
  }


}
