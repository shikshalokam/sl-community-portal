import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";
import { CommonService } from 'src/app/modules/portal-core';



@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
 
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    if(this.fields){
      this.form = this.createControl();
    }

    this.commonService.onFormReset.subscribe(()=>{
     this.form.reset();
    }
   );

  }



// Binding the controls with the fields
  createControl() {
     const group = this.fb.group({});
    this.fields.forEach(field => {
      if(field.visible) {
      if (field.input === "button")
       return;
      const control = this.fb.control(
        '',
        this.bindValidations(field.validation || [])
      );
      group.addControl(field.field, control);
      }
    });
    return group;
  }


  // To bind the validations
  bindValidations(validations: any) {
    
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        if(valid.name === 'required') {
          validList.push(Validators.required)
        }
        if(valid.name === 'pattern'){
          validList.push(Validators.pattern(valid.validator))

        }
      });
      return Validators.compose(validList);
    }
    return null;
  }

  get value() {
    return this.form.value;
  }

  // on submitting the form
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }


  // To Validate the form
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
