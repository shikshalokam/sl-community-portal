import { Directive, Input, ElementRef, Output,
    EventEmitter, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, filter, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Directive({
  selector: '[appDebounceDirective]'
})
export class DebounceDirective  {
  @Input() appDebounceDirective;
  @Output() onValueChange = new EventEmitter();
  subject: Subject<any> = new Subject();
  constructor(private Element: ElementRef,
    private renderer: Renderer2
    ) {
  }

  ngOnInit() {
    fromEvent(this.Element.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , filter(res => res.length > 1 || res.length == 0)
      , debounceTime(500)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.onValueChange.emit();
    });
  }
 
  
}
