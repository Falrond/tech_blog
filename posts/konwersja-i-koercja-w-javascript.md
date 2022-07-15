---
title: "Konwersja i koercja w Javascript"
date: "July 15, 2022"
excerpt: "Dowiedź się o mechanizmach w Javascript, które przyprawiły o ból głowy niejednego programistę"
cover_image: "/images/posts/konwersja-i-koercja-w-javascript.jpg"
category: "JavaScript"
---

### Czym jest konwersja?

Konwersja to inaczej przekształcenie wartości w wartość należącą do innego typu danych. JavaScript jako język dynamicznie typowany posiada mechanizm konwersji typów, który może stanowić pewnie ułatwienie przy pracy z tym językiem, ale również może doprowadzić do wielu błędów, które mogą wyjść na jaw np. przy zmianie typu dostarczanych danych. Przykład pierwszy:

```js
const year = "1999";
console.log(year - 1); // 1998
```

W tym przypadku interpreter JavaScript zmienił typ zmiennej `year` na `number` i wykonał działanie odejmowania.

```js
const year = "1999";
console.log(year + 1); // '19991'
```

W powyższym przykładzie stało się coś nieoczekiwanego mianowicie `string` nie został zamieniony na typ `number`, tylko liczba została przekonwertowana na `string`. Dzieje się tak dlatego, że w Javascript znak `+` wywołuję koercję do typu `string` zawsze gdy znajduję się obok łańcucha znaków. Wówczas konkatenacja (czyli łączenie stringów) ma pierszeństwo nad dodawaniem.\
Najprostszym sposobem "naprawienia" takiego przypadku jest konwersja typu np. za pomocą funkcji `Number`. Jest to tzw. **_konwersja jawna_** czyli programista świadomie przy wykorzystaniu dostępnych narzędzi nakazuje zmianę typu danych.

```js
const year = "1999";
console.log(Number(year) + 1); // 2000
```

Spróbujmy teraz czegoś mniej oczywistego:

```js
const name = "Ala";
console.log(name * 10); // NaN
```

W tym przykładzie zmienna `name` nie mógła zostać przekonwertowana na liczbę, więc została zwrócona wartość `NaN`, więc `NaN * number = NaN`.
Dodatkowy ból głowy może wywołać fakt, że `typeof NaN` jest typem `number`

```js
console.log(typeof NaN); // number
```

JavaScript potrafi wykonać konwersję do trzech typów: `number`, `string` i `boolean`. O typie `boolean` zrobię osobny wpis, ze względu na jego specjalne zachowanie.

### Koercja

Czyli **_konwersja niejawna_**. Występuje wówczas, gdy interpreter JavaScript automatycznie określa typ danych bez ingerencji programisty. Tak naprawdę widzieliśmy już przykład koercji na początku tego wpisu, ale przytoczę podobny przypadek:

```js
console.log("Ala " + "ma " + 3 + " koty"); // 'Ala ma 3 koty'
```

Nastąpiła tutaj niejawna konwersja typu `number` czyli liczby `3` na `string` `"3"`.\
Poniższy przykład również widzieliśmy wcześniej. W tym przypadku znak `-` wyzwala koercję typu `string` do `number` czyli odwrotnie niż przy znaku `+`.

```js
console.log("100" - "10" - 35); // 55
```

Podobna sytuacja będzie miała miejsce w przypadku znaku `*`:

```js
console.log("45" * "2"); // 90
```

JavaScript zamienił typy `string` na `number` bo tylko w takim wypadku jest możliwość przeprowadzenia operacji mnożenia. To samo w sytuacji gdy użyjemy `/`:

```js
console.log("60" / "2"); // 30
```

Na zakończenie kilka przykładów do ćwiczeń. Spróbuj przewidzieć jaką wartość będzie miał `n`:

```js
let n = "1" + 1;
n = n - 1;
console.log(n);
```

```js
let n = 2 + 3 + 5 + "5";
console.log(n);
```

```js
let n = "20" - "10" - "2" - 1 + "5";
console.log(n);
```

```js
let n = "10" - "5" - "4" + 5;
console.log(n);
```
