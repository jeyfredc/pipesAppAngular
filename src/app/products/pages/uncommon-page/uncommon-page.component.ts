import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {
// i18n Select
public name: string = 'Jeyfred'
public gender: 'male'| 'female' = 'male'
public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'

}


changeClient ():void {
  this.name = 'Paula';
  this.gender= 'female'
}

// i18nPlural

public clients : string[] = ['Carol', 'Jeisson', 'Maleja', 'Camilo', 'Viviana' , 'Sebastian', 'Paula']
public clientsMap = {
  '=0': 'no tenemos ningún cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos dos clientes esperando',
  'other': 'tenemos # clientes esperando',


}

deleteClient (): void {
  this.clients.shift()
}


// Json Pipe | KeyValue Pipe

public person = {
  name:'Jeyfred',
  age: 29,
  addres : 'Soacha, Cundinamarca'
}

// Async Pipe
// Inicia cuando se abre el componente y finaliza cuando se cierra
public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(value => console.log('tap', value)
  )
)

// con las promesas no se puede cancelar el evento
// public promiseValue:Promise<string> = new Promise((resolve,reject)=> {
//   setTimeout(() => {
//     resolve('Tenemos data en la promesa')
//   }, 3500);
// })

}
