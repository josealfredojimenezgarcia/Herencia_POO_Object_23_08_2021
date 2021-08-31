

class espada{
  constructor(arg){
      for(let [id, value] of Object.entries(arg)){
          this[id] = value;
      }
  }
  atacar(){
      return this.ataque;
  }
}
class espadaHielo extends espada{
  constructor(arg){
      super(arg);
      this.vida = "+100";
      this.efecto = "Congelamiento automático";
      this.ataque+=20;
      this.color='Azul';
  }
  atacar(){
      return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
  }
}


let data = {
  ataque:160,
  diametro: "60cm",
  efecto: undefined,
  color: 'red',
}
const inst = new espada(data);
console.log(inst.atacar());
console.log(inst);

const instHielo = new espadaHielo(data);
console.log(instHielo.atacar());
console.log(instHielo);



