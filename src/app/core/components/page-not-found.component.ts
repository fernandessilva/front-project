import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <section
      fxLayout="column wrap"
      fxLayoutGap="60px"
      fxLayoutAlign="center center"
    >
      <div fxFlex>404 We're searching for your page...</div>
      <div fxFlex>
        <mat-spinner></mat-spinner>
      </div>
      <div fxFlex>... But we can't find it.</div>

      <mat-card-actions>
        <button mat-fab color="warn" routerLink="/">
          <mat-icon>home</mat-icon>
        </button>
      </mat-card-actions>
    </section>
  `,
})
export class PageNotFoundComponent {}
