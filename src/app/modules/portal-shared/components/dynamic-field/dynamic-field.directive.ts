import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { MultiSelectComponent } from "../multi-select/multi-select.component";



// TO bind the components based on the type of the field
const componentMapper = {
  text: InputComponent,
  select: SelectComponent,
  date: DateComponent,
  radio: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  multiselect: MultiSelectComponent
};

@Directive({
  selector: '[dynamicField]',

})
export class DynamicFieldDirective implements OnInit {
  componentRef: any;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.input]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}


