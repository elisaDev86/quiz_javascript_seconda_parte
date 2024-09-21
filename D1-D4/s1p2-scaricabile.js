/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
"Immaginiamo di avere dei barattoli e ogni barattolo contiene qualcosa ma non sappiamo cosa esattamente ci sia dentro";
"per saperlo dovremo dare a ciascun barattolo un nome quindi applicheremo delle etichette ognuna con un nome diverso";
"così quando prendiamo un barattolo sapremo sempre cosa esattamente c'è dentro.";
"I dataype hanno la stessa funzione delle etichette, ci indicano quale tipo di dato abbiamo.";
"I datatype che conosciamo sono: 1) String (è un insieme di caratteri alfanumerici, cioè possiamo mettere insieme parole o numeri)";
"2) Number (sono proprio i numeri e possono essere interi oppure di tipo 'float' cioè quelli con la virgola)";
"3) Boolean (questo dato serve a dirci se una cosa è vera 'true' o falsa 'false', si usa spesso in combinazione con il costrutto 'if-else')";
"4) Oggetto (è come se fosse una grande raccolta di dati messi tutti insieme come ad esempio: numeri, stringhe ecc...)";
"5) Array (anche se non è un dato primitivo è comunque uno speciale tipo di oggetto che può essere paragonato ad una lista che al suo interno contiene un elenco ordinato di tanti dati e ognuno di essi ha un suo indice specifico, infatti si parte contando da 0";
"6) Undefined (questo dato indica che non è stato attribuito nessun valore ad una determinata variabile)";
"7) Null (questo dato indica che una determinata variabile precedentemente con un valore assegnato adesso è vuota";
"8 BigInt (viene utilizzato quando dobbiamo lavorare con un numero grandissimo ";
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
"Un oggetto in Js è come una grande raccolta di informazioni che possiamo utilizzare durante il nostro codice";
"queste informazioni vengono classificate ed ordinate attraverso il rapporto 'chiave-valore', questo permette al codice di rimanere ordinato e più semplice da lavorare";
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let primoNumero = 12;
let secondoNumero = 20;
let somma = primoNumero + secondoNumero;
console.log(somma);
/*oppure*/
let somma2 = 12 + 20;
console.log(somma2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Elisa";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let mioNumero = 4;
let sottrazione = mioNumero - x;
console.log(sottrazione);
/*oppure*/
let sottrazione2 = x - 4;
console.log(sottrazione2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
/* SCRIVI QUI LA TUA RISPOSTA */
