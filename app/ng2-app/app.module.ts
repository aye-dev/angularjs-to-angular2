

import { NgModule } from "@angular/core";
import { UpgradeModule } from "@angular/upgrade/static";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    NavComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    NavComponent
  ]
})
export class AppModule {}