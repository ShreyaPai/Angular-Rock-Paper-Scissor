import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';

@NgModule({
  declarations: [
    AppComponent,
    RockPaperScissorComponent
  ],
  imports: [
    BrowserModule,
    DividerModule,
    ButtonModule,
    CardModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
