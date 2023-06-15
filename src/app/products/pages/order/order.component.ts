import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public orderBy?: keyof Hero;

  public heroes : Hero[] = [
    {
      name:'Superman',
      canfly: true,
      color: Color.blue,
    },
    {
      name:'Batman',
      canfly: false,
      color: Color.black,
    },
    {
      name:'Daredevil',
      canfly: false,
      color: Color.red,
    },
    {
      name:'Hulk',
      canfly: false,
      color: Color.green,
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }


}
