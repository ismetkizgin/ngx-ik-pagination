# Angular Pagination (ngx-ik-pagination)

## Install

```
npm i ngx-ik-pagination --save
```

```
yarn add ngx-ik-pagination
```

## Usage

Import `NgxIkPaginationModule` to your module

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app";

import { NgxIkPaginationModule } from "ngx-ik-pagination";

@NgModule({
  imports: [BrowserModule, NgxIkPaginationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Component has 3 themes in total.

- light (defult)
- dark
- transparent

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example-app",
  template: ` <div>
    <ngx-ik-pagination
      [length]="100"
      [pageSize]="9"
      (onPageEvent)="onPageEvent($event)"
      theme="dark"
    ></ngx-ik-pagination>

    <p>Page Size: {{ paginationResponse.pageSize }}</p>
    <p>Page Number: {{ paginationResponse.pageNumber }}</p>
    <p>Offset: {{ paginationResponse.offset }}</p>
  </div>`,
})
export class AppComponent {
  paginationResponse: any;
  onPageEvent(e) {
    this.paginationResponse = e;
  }
}
```

## Support ngx-ik-pagination

ngx-ik-pagination is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## License

[MIT](LICENSE)
