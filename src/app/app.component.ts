import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoping';

  loadedItem="recipes";
  onNavigate(feature:string)
  {
    this.loadedItem=feature;
  }
}
