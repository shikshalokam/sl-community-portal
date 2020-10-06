import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicFormComponent } from 'shikshalokam';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  filterForm: FormGroup
  @Input() filtersData: any;
  @Output() sendFilters = new EventEmitter();


  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.sendFilters.emit(this.form.value);
  }

  clearFilters() {
    this.form.clearForm();
    this.sendFilters.emit(this.form.value);
  }


}
