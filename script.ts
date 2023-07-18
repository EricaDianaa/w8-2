// ESERCIZIO SOLO CON CONSOLE.LOG
//CREAZIONE CLASSI
let saldo = document.getElementById("saldo") as HTMLDivElement;
let saldo1 = document.getElementById("saldo1") as HTMLDivElement;
console.log("---------------Primo conto------------------");
class SonAccount {
  conto!: number;
  versamento!: number;
  prelievo!: number;
  constructor(vers: number, pre: number) {
    this.conto = 0;
    this.versamento = vers;
    this.prelievo = pre;
    this.oneDeposit();
    this.oneWithDraw();
    this.contoAttuale();
  }
  oneDeposit() {
    let som = this.conto + this.versamento;
    console.log("Hai versato" + " " + som);
  }
  protected oneWithDraw() {
    let som = this.conto - this.prelievo;
    console.log("Hai prelevato" + " " + som);
  }
  protected contoAttuale() {
    let som = this.conto + this.versamento - this.prelievo;
    console.log("Il tuo conto attuale è" + " " + som);
    saldo.innerHTML = `<p> Il tuo conto attuale è di ${
      this.conto + this.versamento - this.prelievo
    }$</p>`;
  }
}
let oneBankAccount = new SonAccount(50, 10);
console.log("---------------Secondo conto------------------");
class MotherAccount {
  conto!: number;
  versamento!: number;
  prelievo!: number;
  addInterest!: number;
  constructor(vers: number, pre: number) {
    this.conto = 0;
    this.versamento = vers;
    this.prelievo = pre;
    this.addInterest = 10;
    this.twoDeposit();
    this.twoWithDraw();
    this.contoAttuale();
    this.Interessi();
  }
  protected twoDeposit() {
    let som = this.conto + this.versamento;
    console.log("Hai versato" + " " + som);
  }
  protected twoWithDraw() {
    let som = this.conto - this.prelievo;
    console.log("Hai prelevato" + " " + som);
  }
  protected contoAttuale() {
    let som = this.conto + this.versamento - this.prelievo;
    console.log("Il tuo conto attuale è" + " " + som);
    saldo1.innerHTML = `<p> Il tuo conto attuale è di ${
      this.conto + this.versamento - this.prelievo
    }$</p>`;
  }
  protected Interessi() {
    let som = this.conto + this.versamento - this.prelievo;
    let calcolo = (som * this.addInterest * 24) / 1200;
    let tot = (som * this.addInterest * 24) / 1200 + som;
    console.log("Il tasso di interesse è " + " " + calcolo);
    console.log("Il tuo conto ha maturato " + " " + tot);
  }
}

let secondBankAccount = new MotherAccount(1000, 0);

//ESERCIZIO SU SCHERMO
//RIFERIMENTI HTML
let versamenti1 = document.getElementById("Versamento") as HTMLInputElement;
let prelievi1 = document.getElementById("prelievo") as HTMLInputElement;
let versamenti2 = document.getElementById("Versamento1") as HTMLInputElement;
let prelievi2 = document.getElementById("prelievo1") as HTMLInputElement;
let button1 = document.getElementById("invia1") as HTMLButtonElement;
let button2 = document.getElementById("invia2") as HTMLButtonElement;
let button3 = document.getElementById("invia3") as HTMLButtonElement;
let button4 = document.getElementById("invia4") as HTMLButtonElement;
let div = document.getElementById("numberDiv") as HTMLDivElement;
let div1 = document.getElementById("numberDiv1") as HTMLDivElement;

//SELEZIONO I VALORI INPUT
let vers1: any;
let pre1: number;
let vers2: number;
let pre2: number;
button1.addEventListener("click", function () {
  let vers1 = versamenti1.value;
  console.log(vers1);

  div.innerHTML = `<p> Hai versato ${versamenti1.value}$</p>`;
});

button2.addEventListener("click", function () {
  let pre1 = prelievi1.value;
  console.log(pre1);
  div.innerHTML = `<p> Hai prelevato ${prelievi1.value}$</p>`;
});

button3.addEventListener("click", function () {
  let vers2 = versamenti2.value;
  console.log(vers2);
  div1.innerHTML = `<p> Hai versato ${versamenti2.value}$</p>`;
});

button4.addEventListener("click", function () {
  let pre2 = prelievi2.value;
  console.log(pre2);
  div1.innerHTML = `<p> Hai prelevato ${prelievi2.value}$</p>`;
});
