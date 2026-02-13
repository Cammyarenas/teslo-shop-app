import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/front-navbar";

@Component({
  selector: 'app-store-front-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './store-front-layout.html',
})
export class StoreFrontLayout { }
