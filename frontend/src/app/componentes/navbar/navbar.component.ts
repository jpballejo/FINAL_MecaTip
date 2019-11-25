import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLog;

  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('userSess')))
    this.usuarioLog = JSON.parse(localStorage.getItem('userSess')).username;
  }

}
