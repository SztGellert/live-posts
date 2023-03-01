import {Component} from '@angular/core';
import {BackEndService} from "../back-end.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private backEndService: BackEndService) {
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log("onSave() Called!")
    this.backEndService.saveData();
  }

  onFetch() {
    console.log("onFetch() Called!")
    this.backEndService.fetchData();
  }
}
