import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MySqlAppGCloudSharedModule } from 'app/shared/shared.module';
import { MySqlAppGCloudCoreModule } from 'app/core/core.module';
import { MySqlAppGCloudAppRoutingModule } from './app-routing.module';
import { MySqlAppGCloudHomeModule } from './home/home.module';
import { MySqlAppGCloudEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MySqlAppGCloudSharedModule,
    MySqlAppGCloudCoreModule,
    MySqlAppGCloudHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MySqlAppGCloudEntityModule,
    MySqlAppGCloudAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class MySqlAppGCloudAppModule {}
