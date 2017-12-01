
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup

  total = new FormControl(0);
  subtotals = new FormArray([new FormControl(0), new FormControl(0), new FormControl(0)]);

  ngOnInit() {
    this.form = new FormGroup({
      'Total': this.total,
      'SubTotals': this.subtotals
    })
    
    this.total.valueChanges.subscribe(this.onTotalUpdate);
    
  }

  onTotalUpdate = (value:any) => {
      this.subtotals.controls[0].setValue(value);
  }

  onAddSubTotal() {
    const control = new FormControl(0);
    (<FormArray>this.form.get('SubTotals')).push(control);
  }



}

/* export class CustomFormArray {
  public form: FormGroup;

  public get someArray(): FormArray {
       return this.form.get('someArray') as FormArray
  }

  constructor(private _fb: FormBuilder) {
       this.form = _fb.group({
            someArray: _fb.array([])
       });

       this.someArray.controls.forEach(
            control => {
                control.valueChanges.subscribe(
                     () => {
                    console.log(this.someArray.controls.indexOf(control)) // logs index of changed item in form array
                     }
                )
            }
       )
  }
}  */   

