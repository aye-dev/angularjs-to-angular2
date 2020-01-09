import { AppModule } from "./ng2-app/app.module";
import { UpgradeModule, downgradeComponent } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NavComponent } from "./ng2-app/nav/nav.component";

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  angular.module('app')
    .directive('appNav', downgradeComponent({
      component: NavComponent
    }));

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
});