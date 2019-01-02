import {NgModule} from '@angular/core';
import {ChatBoxComponent} from './chat-box/chat-box';
import {Step1Component} from './step1/step1';
import {Step2Component} from './step2/step2';
import {Step3Component} from './step3/step3';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app/app.module";
import {HttpClient} from "@angular/common/http";
import {IonicModule} from "ionic-angular";
import {MyApp} from "../app/app.component";
import {CoursesPage} from "./step2/course";
import {AutocompleteComponent} from './autocomplete/autocomplete';
import {AuthboxComponent} from './authbox/authbox';
import {UnlockAccessComponent} from "./unlock-access/unlock-access";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Keyboard} from "@ionic-native/keyboard";

@NgModule({
  declarations: [ChatBoxComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CoursesPage,
    UnlockAccessComponent,
    AutocompleteComponent,
    AuthboxComponent],
  imports: [
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [ChatBoxComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CoursesPage,
    UnlockAccessComponent,
    AutocompleteComponent,
    AuthboxComponent],
  providers: [
    Keyboard
  ]
})
export class ComponentsModule {
}
