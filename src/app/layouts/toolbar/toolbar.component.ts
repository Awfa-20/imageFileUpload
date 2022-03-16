import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor( private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onCreate(){}

  onLogout() {
    this.accountService.logout();
  }


}
