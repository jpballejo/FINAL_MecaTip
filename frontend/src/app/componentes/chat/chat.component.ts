import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserI } from '../../interfaces/user';
import { SocketChatService } from '../../servicios/socket-chat.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { salaI } from 'src/app/interfaces/salas';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  enEspera: UserI[] = [];
  salas: salaI[] = [];

  message: string;
  nomSala: string;
  messages: string[] = [];
  salaActual = localStorage.getItem('salaAct');
  userCreator;
  

  closeResult: string;

   constructor(private modalService: NgbModal, public socketAPI: SocketChatService) {
     console.log();
   }


   crearSala() {
    if(!localStorage.getItem('userSess'))
    return;

    this.userCreator = JSON.parse(localStorage.getItem('userSess')).username;
    console.log(this.nomSala);
    this.socketAPI.crearSala(this.userCreator, this.nomSala);
    console.log("llega1");
    this.socketAPI.salasUpdate$.subscribe(s => console.log('Salas', s))
    console.log(this.salas);

  }

  setearSalaActual(sala){

    console.log(sala.mensajes);
    localStorage.setItem('salaAct', sala.sala);
    this.messages = null;
    this.messages = sala.mensajes;
    this.salaActual = localStorage.getItem('salaAct');

  }

  no() {
    this.socketAPI.emitirCoso()
  }

 enviarMensaje() {
    this.socketAPI.enviarMensaje(this.userCreator+": "+this.message,localStorage.getItem('salaAct'));
    this.message = '';
  }

  ngOnInit() {


    this.socketAPI.usuario_online$.subscribe(u => console.log('viene de socket', u))
    this.socketAPI.listaUserUpdate$.subscribe(u => console.log('USUARIOS', u))
    //this.socketAPI.salasUpdate$.subscribe(s => console.log('salas', s))

    this.socketAPI
    .obtenerMensajes("")
    .subscribe((msg: any) => {
      console.log(msg);

      let salA = this.salas.find(salA => salA.sala == msg.sala);
      console.log(msg.sala);
      console.log(salA);
      salA.mensajes.push(msg.msg);

    });

    this.socketAPI
    .obtenerSalas()
    .subscribe((sala: any) => {
      this.salas.push(sala);

    });


    this.socketAPI
    .obtenerTodasSalas()
    .subscribe((salas: any) => {
      console.log(salas);
      this.salas=salas.salasChat;
      //this.salas=salas;

    });

    this.socketAPI
    .pedirSalas();




    /*this.socketAPI
    .obtenerMensajes(this.salaActual)
    .subscribe((message: string) => {
      this.messages.push(message);
    });
*/

    }

  emitir() {

  }






}
