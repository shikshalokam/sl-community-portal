import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { apiConfig, CommonService } from '../../portal-core';



@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  searchString: any = '';
  nextCriteriaPage: any = 1;
  draftListPageSize: any = 5;
  draftsList: any;
  draftListCount: any;
  search: any = '';
  constructor(private commonService: CommonService, private communityService: CommunityService,
    private router: Router) {}

  ngOnInit() {
    this.draftsListing();
  }

  onPaginateChange(event) {
    this.nextCriteriaPage = event.pageIndex + 1;
    this.draftListPageSize = event.pageSize;
    this.draftsListing();
  }

  goToDetails(frameworkId){
    this.router.navigate(['/workspace/create/details'], { queryParams: { assesmentType: 'observations', id: frameworkId } });

  }


  draftsListing() {
    this.communityService.get(environment.workspace_url +
      apiConfig.getDraftsList + '?search=' + this.search + '&page=' +
      this.nextCriteriaPage + '&limit=' + this.draftListPageSize).subscribe(data => {
        if (data && data['status'] == 200) {
          this.draftsList = data['result']['data'];
          this.draftListCount = data['result'].count;
        }
      },
        error => {
          this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
        });
  }

}
