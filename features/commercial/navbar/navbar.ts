import { Component } from '@angular/core';
import { LucideCircleUserRound } from "@lucide/angular";

import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [LucideCircleUserRound, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
