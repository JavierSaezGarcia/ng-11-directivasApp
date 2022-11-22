import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]' // nombre para aplicar la directiva a nuestra invencion
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _mensaje: string = 'Luis Primero';

  
  htmlElement: ElementRef<HTMLElement>;
  
/*
Lo que estamos colocando es el set color y cada vez que el color 
cambia, entonces estamos cambiando el valor del mismo.
Pero no estamos manteniendo la propiedad de color, simplemente la 
recibimos y ejecutamos este código.
Es como que tuviéramos un método, pero realmente si ustedes
necesitaran inclusive dentro de la misma directiva, saber cuál es el 
color establecido, entonces tendríamos que crearnos alguna propiedad 
privada.
*/
  @Input() set color(valor: string){
    
    this._color = valor;
    this.setColor();
  }
  // con @Input y la caracteristica podemos acceder a la directiva desde cualquier lgar 
  @Input() font: string = 'Helvetica';
  // @Input() mensaje: string = '';
  @Input() set mensaje(valor: string){       
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido(valor: boolean){
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('ocultar');
    }else{
      this.htmlElement.nativeElement.classList.remove('ocultar');
    }
  }
  
  
  constructor(private el: ElementRef<HTMLElement>) { 
    
    this.htmlElement = el;
    
   
  }
  // en el NgOnInit solo se disparan las funciones cuando se ejecuta la app. 
  // Si despues cambia no se vuelve a ejecutar
  ngOnInit(): void {
    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined
    this.setColor();
    // this.setFont();
    this.setMensaje();
    this.setEstilo();
    
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if ( changes['mensaje'] ){
    //   const mensaje = changes['mensaje'].currentValue;    
      
    //   this.htmlElement.nativeElement.innerText = mensaje;
    //   console.log(mensaje);
    // }
    // if( changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    

  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;    
  }
  // setFont():void {
  //   this.htmlElement.nativeElement.style.fontFamily = this.font;
  // }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
