import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categoryData: any;
  subCategoryData: any;
  languageData: any;
  topicData: any;
  filterForm: FormGroup
  @Input() filtersData: any;
  @Output() sendFilters = new EventEmitter();
  myFormGroupSubs: Subscription;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.filterForm)
      this.filterForm = this.filters();
    // this.sample();
  }

  filters() {
    const group = this.fb.group({});

    this.filtersData.forEach(field => {
      const control = this.fb.control(
        field.label
      );
      group.addControl(field.label, control);
    });
    return group;

    // this.filterForm = this.fb.group({
    //   filter: [],
    // });
  }

  onchange() {
    this.sendFilters.emit();
    console.log(' this.filterForm', this.filterForm.value);

  }
}
