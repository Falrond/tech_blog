---
title: "Truthy and falsy values"
date: "July 16, 2022"
excerpt: "Dowiesz się jakie wartości JavaScript traktuje jako true oraz false"
cover_image: "/images/posts/truthy-falsy-javascript.png"
category: "JavaScript"
---

### Czym są wartości falsy?

Są to wartości, które nie są tak naprawde `false`, ale staną się takie gdy spróbujemy przekonwertować je do typu `boolean`. W JavaScript mamy 5 wartości falsy:

1. `0`
2. `''`
3. `undefined`
4. `null`
5. `NaN`

Oczywiście `false` samo w sobie jest wartością `false` więc nie musimy jej umieszczać w powyższej liście. Wartości truthy można określić jako wszystkie wartości, które na powyższej liście się nie znajdują. Może to być każda liczba która nie jest zerem, albo każdy łańcuch znaków, który nie jest pusty. Te wartości zostaną przekonwertowane na true, kiedy spróbujemy zamienić je na typ `boolean`. Możemy do tego wykorzystać funkcję `Boolean()`:

```js
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean("Ala")); // true
console.log(Boolean({})); // true
```

W praktyce natomiast, nigdy nie wywołujemy funkcji `Boolean`. JavaScript wykonuje to za nas podczas niejawnej konwersji typów czyli **_koercji_**. Niejawna konwersja zachodzi w dwóch przypadkach:

- podczas używania operatorów logicznych
- podczas wykonywania kontekstu logicznego np. `if...else`

Operatorami logicznymi zajmiemy się w osobnym wpisie, a teraz spójrzmy na ten kod:

```js
const catCounter = 0;
if (catCounter) {
  console.log(`Ala ma ${catCounter} koty`);
} else {
  console.log("Ala nie ma żadnego kota");
}
// Ala nie ma żadnego kota
```

W powyższym przykładzie JavaScript próbuje niejawnie przekonwertować wartość zmiennej `catCounter` czyli w naszym przypadku `0` na wartość `boolean` - w tym przypadku otrzymujemy `false`. Więc nie ważne co próbujemy umieścić w nawiasach przy bloku `if`, JavaScript zawsze spróbuje przekonwertować ową wartość na wartość logiczną `true` albo `false`. Spróbujmy zmienić wartość naszej zmiennej:

```js
const catCounter = 4;
if (catCounter) {
  console.log(`Ala ma ${catCounter} koty`);
} else {
  console.log("Ala nie ma żadnego kota");
}
// Ala ma 4 koty
```

Sprawdzmy jeszcze jeden przypadek, często spotykany w codzienniej pracy jako developer:

```js
let var1;
if (var1) {
  console.log(`Variable has a value!`);
} else {
  console.log("Variable doesn't have a value");
}
// Variable doesn't have a value
```

Powyższy kod zwrócił wartośc `false`, ponieważ zmienna która nie ma przypisanej wartości jest `undefined`, a jak wiemy z listy, którą zamieściłem wyżej, taka wartość jest traktowana podczas koercji przez JavaScript jako `false`. Teraz gdy przypiszemy wartość do naszej zmiennej `var1`:

```js
let var1 = 123;
if (var1) {
  console.log(`Variable has a value!`);
} else {
  console.log("Variable doesn't have a value");
}
// Variable has a value!
```

Na koniec jeszcze jeden przykład:

```js
let var1 = 0;
if (var1) {
  console.log(`Variable has a value!`);
} else {
  console.log("Variable doesn't have a value");
}
// Variable doesn't have a value
```

W tym przypadku kod zwraca `false` pomimo tego, że wartość `0` jest wartością zmiennej i może być wartością poprawną. Rozwiązaniem tego jest użycie **_operatora logicznego_**, któremu przeznaczę osobny wpis.
