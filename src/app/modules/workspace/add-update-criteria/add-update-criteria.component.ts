import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-update-criteria',
  templateUrl: './add-update-criteria.component.html',
  styleUrls: ['./add-update-criteria.component.scss']
})
export class AddUpdateCriteriaComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUpdateCriteriaComponent>,) { }

  ngOnInit() {

    this.dynamicForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
      
  });
  }

  get f() { return this.dynamicForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.dynamicForm.valid) {
      this.dialogRef.close(this.dynamicForm.value);
    }
   
  }

}
