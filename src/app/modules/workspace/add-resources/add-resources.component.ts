import { Component, OnInit, Optional,Inject } from '@angular/core';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { apiConfig, CommonService } from '../../portal-core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'description'];
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  nextPage: any = 1;
  pageSize: any = 5;
  search: any = '';
  listCount: any;
  assesmentType: any;
  frameworkId: any;
  criteriaObj: any;
  criteriaDetails: any;
  finalResources: any;
  constructor(private communityService: CommunityService,
    private commonService: CommonService,
    private dialogRef: MatDialogRef<AddResourcesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.assesmentType = data['assesmentType'];
      this.frameworkId = data['id'];

    });
    this.criteriaObj = this.data['data'];
    this.getCriteriaDetails(this.criteriaObj._id);

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  selectionChange(row) {
    if (row.isSelected) {
      row.isSelected = false;
      this.selection.deselect(row);
    } else {
      row.isSelected = true;
    }
  }


  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  onPaginateChange(event) {
    this.nextPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getResourcesData();
  }

  
  updateCriteria() {
    const selectedData = this.selection.selected
    this.criteriaUpdate(this.criteriaObj);
  }


   // To get the Resources based on criteria
   getResourcesData() {
    this.communityService.get(environment.workspace_url + apiConfig.getResourcesList
      + '?page=' + this.nextPage + '&limit=' + this.pageSize + '&search=' + this.search)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data['result'].content);
        this.listCount = data['result'].count;
        this.dataSource.data.forEach(row => {
          row.isSelected = false;
        })
        if( this.criteriaDetails) {
        this.dataSource.data.forEach(row => {
          this.criteriaDetails.forEach(element => {
            if(row._id == element._id) {
              this.selection.select(row);
              row.isSelected = true;
            }
          });
          });
        }
      },
      error => {
        this.commonService.commonSnackBar(error.error['message'], 'Dismiss', 'top', 10000);
      });
  }



  criteriaUpdate(data) {
    this.finalResources = []
    data['draftFrameworkId'] = this.frameworkId;
    var result = this.selection.selected.reduce((unique, o) => {
      if (!unique.some(obj => obj._id === o._id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    result.forEach(element => {
      if (element.isSelected)
        this.finalResources.push(element);
    });

     data['learningResources'] = this.finalResources;
     this.commonService.criteriaUpdate(this.criteriaObj, data)
       .subscribe(data => {
         this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
        this.dialogRef.close();
       }, error =>{
         this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
       });
   }

    // To get the criteria details
    getCriteriaDetails(criteriaID){
      this.communityService.get(environment.workspace_url + apiConfig.criteriaDetails + criteriaID)
      .subscribe(data =>{
        this.criteriaDetails =  data['result']['learningResources'];
        // this.criteriaDetails.forEach(element => {
        //   element.isSelected = true;
        // });
        this.getResourcesData();
      })
    }
  
  }

