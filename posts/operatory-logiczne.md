---
title: "Operatory logiczne"
date: "July 17, 2022"
excerpt: "Rodzaje operatorów logicznych w JavaScript"
cover_image: "/images/posts/operatory-porownania.jpg"
category: "JavaScript"
markdown:
absolute_image_path: falseMarkdown All in One
---

Logika boolowska jest gałęzią informatyki, która używa wartości `true` i `false` do rozwiązywania złożonych problemów logicznych. Operatory logiczne to `AND`, `OR` i `NOT`. Przyjrzyjmy się dwóm przykładom:

```js
const a = "Ala nakarmiła kota";
const b = "Ala ma kota";
```

Są to zmienne logiczne, które mogą być prawdą albo fałszem. Używając operatora `AND` możemy połączyć obie te zmienne i uzyskać wynik w postaci `true` albo `false` w zależności od tego czy składowe pomiędzy operatorem `AND` będą prawdziwe czy fałszywe.

<p align="center">
<img src="https://lh3.googleusercontent.com/QbUCj9iLOcn6-Jt5UEDCS0aEL6yTB8etZ6Uy8yQxxN6zzLYL2RypDlT4vlPJxtpl_iuMetYRngqPsfI_z3VtVPQdEuUvecRgZmFDSpj8NL_DbjLIJVMDpSwx7OwMFZ2yjCaMHQOhfQ=w2400">
</p>

Tabela przedstawia możliwe wartości dla każdej ze zmiennych oraz wynik jaki zwróci operator `AND`. Możemy odczytać, że wartość `true` dla obu zmiennych zwróci `true` dla operacji. Dla każdej innej sytuacji wynik `A AND B` będzie `false`.

Operator `OR` działa odwrotnie. Wynikiem operacji będzie `true` jeżeli przynajmniej jedna zmienna będzie miała wartość `true`.

Na sam koniec został operator `NOT`, który zamienia wartość `true` na `false` i odwrotnie. Jeżeli używamy go z wartościami `non-boolean` zwraca `false` jeśli pojedyńczy operand (zmienna) może być przekształcony na `true`, w przeciwnym razie zwraca `true`. Przejdźmy do przykładów:

```js
const age = 16;

A: age is greater or equal 20 // false
B: age is less than 30 // true

A AND B // false
A OR B // true
!A AND B // true
A OR !B // false
!A // true
```

Zobaczmy zatem jak wyglądają operatory logiczne w JavaScript. Na początek stwórzmy zmienne:

```js
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //true
```

Rezultatem operacji logicznej jest `true`, ponieważ obie zmienne, również mają wartość `true`.

```js
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //false
```

Jeżeli jedna składowa ma wartość `false` to wynik całej operacj logicznej również będzie `false`. Zobaczmy jak to będzie wyglądało z operatorem `OR`.

```js
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense || hasGoodVision); //true
```

Jeżeli chociaż jedna składowa ma wartość `true`, to całość wyrażenia będzie `true`. Operator `NOT` możemy zastosowac w nastepujący sposób:

```js
const hasDriversLicense = true; //A
!hasDriversLicense;
console.log(hasDriversLicense); //false
```

Wartość wyrażenia możemy wykorzystać do warunkowego wykonania operacji:

```js
const hasDriversLicense = true;
const hasGoodVision = true;

if (hasDriversLicense && hasGoodVision) {
  console.log("Jesteś w stanie prowadzić auto");
} else {
  console.log("Ktoś inny powinien prowadzić auto");
}
```

Możemy wykorzystac kilka operatorów w jednej operacji:

```js
const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired); // true
```

```js
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired); // false
```

```js
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired); // true
```
