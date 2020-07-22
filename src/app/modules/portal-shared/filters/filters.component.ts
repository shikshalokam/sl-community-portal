import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../field.interface';
import { NgForm } from '@angular/forms';
import { CommonService } from '../../portal-core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
 
  field: FieldConfig;
  filterForm: FormGroup

  @Input() filtersData: any;
  @Output() sendFilters = new EventEmitter();


  formdata = [
    {
      "field": "category",
      "value": "",
      "visible": true,
      "editable": true,
      "label": "Category",
      "input": "select",
      "validation": [

      ],
      "options": [
        {
          "label": "CBSE",
          "value": "cbse"
        },
        {
          "label": "ICSE",
          "value": "icse"
        },
        {
          "label": "State (Uttar Pradesh)",
          "value": "upboard"
        }
      ]
    },
    {
      "field": "Subcategory",
      "value": "",
      "visible": true,
      "editable": true,
      "label": "Sub category",
      "input": "select",
      "validation": [

      ],
      "options": [
        {
          "label": "KG",
          "value": "kindergarten"
        },
        {
          "label": "Class 1",
          "value": "grade1"
        },
        {
          "label": "Class 2",
          "value": "grade2"
        },
      ]
    },
    {
      "field": "language",
      "value": "",
      "visible": true,
      "editable": true,
      "label": "Language",
      "input": "select",
      "validation": [

      ],
      "options": [
        {
          "label": "English",
          "value": "english"
        },
        {
          "label": "Hindi",
          "value": "hindi"
        },
        {
          "label": "Odia",
          "value": "oriya"
        },
      ]
    },
    {
      "field": "topic",
      "value": "",
      "visible": true,
      "editable": true,
      "label": "Topic",
      "input": "select",
      "validation": [

      ],
      "options": [
        {
          "label": "Mathematics",
          "value": "mathematics"
        },
        {
          "label": "English",
          "value": "english"
        },
        {
          "label": "Tamil",
          "value": "tamil"
        },
      ]
    }
  ];
  constructor(private fb: FormBuilder, private commonService: CommonService) {

  }

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.sendFilters.emit(this.form.value);
  }

  clearFilters() {
    this.commonService.resetForm();
    this.sendFilters.emit(this.form.value);
  }
}
