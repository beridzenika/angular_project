import { Component } from "@angular/core";
import {LOGO_URL} from '../resurces';

@Component ({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
    standalone: false
})

export class HeaderComponent{
    LogoUrl = LOGO_URL;
}