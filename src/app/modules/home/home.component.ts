import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menu_list = [
    { name: "my Dashboard", route: "myDashboard" },
    { name: "Users", route: "users" },
    { name: "Reports", route: "reports" },
    { name: "Advertising", route: "advertising" },
    { name: "Packages", route: "packages" },
    { name: "Logout", route: "/" }
  ]

  constructor(private breakpointObserver: BreakpointObserver) { }


  ngOnInit(): void {
  }

}
