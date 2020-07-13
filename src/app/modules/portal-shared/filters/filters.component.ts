import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {


  filterForm: FormGroup

  @Input() filtersData: any;
  @Output() sendFilters = new EventEmitter();
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.filters();
  }

  filters() {
    if (this.filtersData) {
      this.filterForm = this.fb.group({
        filterSelects: this.fb.array(this.filtersData.map(item => new FormControl(''))),
      });
    }
  }


  onChange() {
    this.sendFilters.emit(this.filterForm.value);
  }

  clearFilters() {
    this.filterForm.reset();
    this.filterForm = this.fb.group({
      filterSelects: this.fb.array(this.filtersData.map(item => new FormControl(''))),
    });
    this.sendFilters.emit(this.filterForm.value);
  }
}
