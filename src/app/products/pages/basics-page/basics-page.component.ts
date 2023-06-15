import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'jeyfred'
  public nameUpper: string = 'JEYFRED'
  public fullName: string = 'JeYfReD CaLdErOn'
  public customDate: Date = new Date()
}
