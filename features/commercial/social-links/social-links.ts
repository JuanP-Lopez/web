import { Component } from '@angular/core';

import { Facebook } from "../../shared/icons/facebook/facebook";
import { Instagram } from "../../shared/icons/instagram/instagram";
import { Youtube } from "../../shared/icons/youtube/youtube";

@Component({
  selector: 'app-social-links',
  imports: [Facebook, Instagram, Youtube],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {}
