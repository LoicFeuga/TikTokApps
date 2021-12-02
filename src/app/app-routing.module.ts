import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./posts/first/first.component";
import {SecondComponent} from "./posts/second/second.component";
import {ThirdComponent} from "./posts/third/third.component";
import {FourthComponent} from "./posts/fourth/fourth.component";
import {FifthComponent} from "./posts/fifth/fifth.component";
import {SixthComponent} from "./posts/sixth/sixth.component";
import {SeventhComponent} from "./posts/seventh/seventh.component";
import {EighthComponent} from "./posts/eighth/eighth.component";
import {NinethComponent} from "./posts/nineth/nineth.component";
import {TenthComponent} from "./posts/tenth/tenth.component";
import {EleventhComponent} from "./posts/eleventh/eleventh.component";
import {TwelfthComponent} from "./posts/twelfth/twelfth.component";
import {FormBuilderComponent} from "./lab/form-builder/form-builder.component";
import {P1Component} from "./posts/p1/p1.component";
import {P2Component} from "./posts/p2/p2.component";
import {P3Component} from "./posts/p3/p3.component";
import {P4Component} from "./posts/p4/p4.component";
import {P5Component} from "./posts/p5/p5.component";
import {P6Component} from "./posts/p6/p6.component";
import {P7Component} from "./posts/p7/p7.component";
import {P7DetailComponent} from "./posts/p7-detail/p7-detail.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: 'fourth',
    component: FourthComponent
  },
  {
    path: 'fifth',
    component: FifthComponent
  },
  {
    path: 'sixth',
    component: SixthComponent
  },
  {
    path: 'seventh',
    component: SeventhComponent
  }
  ,
  {
    path: 'eighth',
    component: EighthComponent
  },
  {
    path: 'tenth',
    component: TenthComponent
  }
  ,
  {
    path: 'nineth',
    component: NinethComponent
  }
  ,
  {
    path: 'eleventh',
    component: EleventhComponent
  }
  ,
  {
    path: 'twelfth',
    component: TwelfthComponent
  },
  {
    path: 'lab',
    component: FormBuilderComponent
  },
  {
    path: 'p1',
    component: P1Component
  },
  {
    path: 'p2',
    component: P2Component
  },
  {
    path: 'p3',
    component: P3Component
  },

  {
    path: 'p4',
    component: P4Component
  },
  {
    path: 'p5',
    component: P5Component
  },
  {
    path: 'p6',
    component: P6Component
  },
  {
    path: 'p7',
    component: P7Component
  },
  {
    path: 'p7-detail',
    component: P7DetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
