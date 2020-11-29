import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BearListComponent } from './bear/bear-list/bear-list.component';
import { BearComponent } from './bear/bear.component';
import { BearDetailsComponent } from './bear/bear-details/bear-details.component';
import { BearItemsComponent } from './bear/bear-list/bear-items/bear-items.component';

@NgModule({
  declarations: [
    AppComponent,
    BearListComponent,
    BearComponent,
    BearDetailsComponent,
    BearItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
