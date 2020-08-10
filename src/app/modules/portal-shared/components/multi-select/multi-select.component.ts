import { FormGroup, FormControl } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  finaldata: any;
  selected: any;
  select: boolean = false;
  alldata: any[];
  @ViewChild('allSelected') allSelected: MatOption;
  public roleMultiFilterCtrl: FormControl = new FormControl();
  constructor() { }
  ngOnInit() {
    this.finaldata = this.field.options;
    this.roleMultiFilterCtrl.valueChanges
      .pipe()
      .subscribe(() => {
        this.finaldata = this.filterRolesMulti();

      });
  }

  protected filterRolesMulti() {
    const filterValue = this.roleMultiFilterCtrl.value.toLowerCase();
    return this.field.options.filter(option => option.label.toLowerCase().includes(filterValue));

  }

  selectionAll() {
    if (this.allSelected.selected) {
      this.group.controls[this.field.field]
        .patchValue([...this.finaldata.map(item => item.value), 0]);
    } else {
      this.group.controls[this.field.field].patchValue([]);
    }
  }

  optionSelection(all){ 
    if (this.allSelected.selected) {  
     this.allSelected.deselect();
     return false;
 }
   if(this.group.controls[this.field.field].value.length==this.finaldata.length)
     this.allSelected.select();
 
 }


}

