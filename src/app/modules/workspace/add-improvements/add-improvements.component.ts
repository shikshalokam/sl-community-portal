import { Component, OnInit, Inject, Optional, ViewChild, ElementRef } from '@angular/core';
import { CommonService, apiConfig } from '../../portal-core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';



@Component({
  selector: 'app-add-improvements',
  templateUrl: './add-improvements.component.html',
  styleUrls: ['./add-improvements.component.scss']
})
export class AddImprovementsComponent implements OnInit {

  improvementProjects: any;
  categories: any;
  displayedColumns: string[] = ['select', 'name', 'description', 'rating'];
  // selection = new SelectionModel;
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  nextPage: any = 1;
  pageSize: any = 5;
  searchString: any = '';
  listCount: any;
  category: any;
  search: any = '';
  finalIMPs: any[];
  criteriaobj: any;
  assesmentType: any;
  frameworkId: any;
  previousImprovements: any;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private commonService: CommonService,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<AddImprovementsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) {
    this.categories = data['data'];
    this.criteriaobj = data['data']['criteria']
    this.category = this.categories[0]['type']
    this.getCriteriaDetails(this.criteriaobj._id);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.assesmentType = data['assesmentType'];
      this.frameworkId = data['id'];
    });
  }

  updateCriteriaData() {
    const selectedData = this.selection.selected
    this.criteriaUpdate(this.criteriaobj);

  }


  criteriaUpdate(data) {
    this.finalIMPs = [];
    var result = this.selection.selected.reduce((unique, o) => {
      if (!unique.some(obj => obj._id === o._id)) {
        unique.push(o);
      }
      return unique;
    }, []);

    result.forEach(element => {
      if (element.isSelected)
        this.finalIMPs.push(element);
    });

    data['draftFrameworkId'] = this.frameworkId;
    data['improvementProjects'] = this.finalIMPs;
    this.commonService.criteriaUpdate(this.criteriaobj, data);
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
    this.getImprovementsData();
  }

  isActive(item) {
    return this.category === item;
  };

  // category selection 
  selectedCategory(data) {
    this.category = data;
    this.search = '';
    this.paginator.firstPage();
    this.getImprovementsData();
  }

  // To get the Improvements based on criteria
  getImprovementsData() {
    this.communityService.get(environment.workspace_url + apiConfig.getImprovements
      + this.category + '?page=' + this.nextPage + '&limit=' + this.pageSize + '&search=' + this.search)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data['result'].data);
        this.listCount = data['result'].count;
        this.dataSource.data.forEach(row => {
          row.isSelected = false;
        })

        this.dataSource.data.forEach(row => {
          this.selection.selected.forEach(element => {
            if (row._id == element._id) {
              this.selection.select(row);
              row.isSelected = true;
            }
          });
        });

        this.dataSource.data.forEach(row => {
          this.previousImprovements.forEach(element => {
            if (row._id == element._id) {
              this.selection.select(row);
              row.isSelected = true;
            }
          });
        });
      });
  }

  // To get the criteria details
  getCriteriaDetails(criteriaID) {
    this.communityService.get(environment.workspace_url + apiConfig.criteriaDetails + criteriaID)
      .subscribe(data => {
        this.previousImprovements = data['result']['improvementProjects'];
        this.previousImprovements.forEach(element => {
          element.isSelected = true;
        });
        this.getImprovementsData();
      })
  }


}
