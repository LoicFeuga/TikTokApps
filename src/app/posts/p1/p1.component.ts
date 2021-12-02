import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, mergeMap, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class P1Component implements OnInit {
  car: any;
  form: FormControl = new FormControl('');
  req = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    of('').pipe(
      delay(1000),
      mergeMap(v => {
        this.req++
        this.car = '0';
        return this.http.get('http://localhost:3000/login/password');
      }),
      delay(1000),
      mergeMap(v => {
        this.req++;
        this.car = v;
        return this.http.get('http://localhost:3000/user/' + v);
      }),
      delay(1000),
      mergeMap((v: any) => {
          this.req++;
          this.car = v;
          return this.http.get('http://localhost:3000/car/' + v.id);
        }
      ),
      delay(1000)
    ).subscribe(v => {
        this.req++;
        this.car = v;
      }
    );


    this.form.valueChanges.pipe(switchMap(v => {
      console.log(v);
      return v;
    }));
  }

}
