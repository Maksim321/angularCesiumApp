import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//window['CESIUM_BASE_URL'] = '/assets/cesium';
Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');
Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
