import { AfterContentInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

/**
 * Component class for showing base view.
 * @class BaseComponent
 */
@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.scss'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements AfterContentInit {
  private previousUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  private getUrl(): string {
    return this.router.routerState.snapshot.url.slice(0, this.router.routerState.snapshot.url.indexOf('#'));
  }

  private prettyPrint(): void {
    const currentUrl = this.getUrl();
    if (typeof PR !== 'undefined' && this.previousUrl !== currentUrl) {
      this.previousUrl = currentUrl;
      PR.prettyPrint();
    }
  }

  public ngAfterContentInit(): any {
    if (isPlatformBrowser(this.platformId)) {
      this.previousUrl = this.getUrl();
      setTimeout(() => PR.prettyPrint(), 50);

      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => {
          setTimeout(() => this.prettyPrint(), 50);
        });
    }
  }
}
