//ESERCIZIO SU SCHERMO
//RIFERIMENTI HTML
let versamenti1 = document.getElementById("Versamento") as HTMLInputElement;
let prelievi1 = document.getElementById("prelievo") as HTMLInputElement;
let versamenti2: any = document.getElementById(
  "Versamento1"
) as HTMLInputElement;
let prelievi2 = document.getElementById("prelievo1") as HTMLInputElement;
let button1 = document.getElementById("invia1") as HTMLButtonElement;
let button2 = document.getElementById("invia2") as HTMLButtonElement;
let button3 = document.getElementById("invia3") as HTMLButtonElement;
let button4 = document.getElementById("invia4") as HTMLButtonElement;
let div = document.getElementById("numberDiv") as HTMLDivElement;
let div1 = document.getElementById("numberDiv1") as HTMLDivElement;
let saldo = document.getElementById("saldo") as HTMLDivElement;
let saldo1 = document.getElementById("saldo1") as HTMLDivElement;

// ESERCIZIO SOLO CON CONSOLE.LOG
//CREAZIONE CLASSI

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

//SELEZIONO I VALORI INPUT
let vers1: any;
let pre1: any;

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

let oneBankAccount = new SonAccount(70, 10);

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
    // this.twoDeposit(); //elimina
    // this.twoWithDraw();
    // this.contoAttuale();
    this.Interessi();
  }
  twoDeposit(ver: number) {
    let som = this.conto + ver;
    console.log("Hai versato" + " " + som);
    saldo1.innerHTML = `<p>Il tuo conto attuale è ${som}$</p>`;
  }
  twoWithDraw(pre: number) {
    let som = this.conto - pre;
    console.log("Hai prelevato" + " " + som);
    saldo1.innerHTML = `<p>Il tuo conto attuale è ${som}$</p>`;
  }
  contoAttuale(ver: number, pre: number) {
    let som = this.conto + ver - pre;
    console.log("Il tuo conto attuale è" + " " + som);
    saldo1.innerHTML = `<p> Il tuo conto attuale è di ${som}$</p>`;
    console.log("conto", this.conto);
  }
  protected Interessi() {
    let som = this.conto + this.versamento - this.prelievo;
    let calcolo = (som * this.addInterest * 24) / 1200;
    let tot = (som * this.addInterest * 24) / 1200 + som;
    console.log("Il tasso di interesse è " + " " + calcolo);
    console.log("Il tuo conto ha maturato " + " " + tot);
  }
}

let secondBankAccount = new MotherAccount(0, 0);
//SELEZIONO I VALORI INPUT
let vers2: number;
let pre2: number;

button3.addEventListener("click", function () {
  let vers2 = Number(versamenti2.value);
  let pre2 = Number(prelievi2.value);
  //  if(button4.onclick){};
  secondBankAccount.twoDeposit(vers2);
  secondBankAccount.contoAttuale(vers2, pre2);
  div1.innerHTML = `<p> Hai versato ${versamenti2.value}$</p>`;
  versamenti2.value = "";
});
button4.addEventListener("click", function () {
  let vers2 = Number(versamenti2.value);
  let pre2 = Number(prelievi2.value);
  secondBankAccount.twoWithDraw(pre2);
  console.log("vers2", vers2);
  secondBankAccount.contoAttuale(vers2, pre2);
  div1.innerHTML = `<p> Hai prelevato ${prelievi2.value}$</p>`;
  prelievi2.value = "";
});
