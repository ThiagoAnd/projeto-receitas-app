import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  aberto = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(){
    alert('jj')
    this.aberto = !this.aberto;
  }
}
