import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
      .overrideTemplate(AppComponent, "<div></div>")
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  describe('should keep subtotals same as total', () => {

    it('case 1', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const app = fixture.componentInstance;
      app.total.setValue(500);
      expect(app.subtotals.controls[0].value).toEqual(500);
    }));

    it('* case 1', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const app = fixture.componentInstance;
      
      app.total.setValue(500);
      app.subtotals.controls[0].setValue(20);

      expect(app.subtotals.controls[1].value).toEqual(480);
    }));

  });



});
