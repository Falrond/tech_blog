---
title: "Operatory porównania w JavaScript"
date: "July 14, 2022"
excerpt: "Operatory porównania, inaczej nazywane operatorami relacyjnymi, bardzo często wykorzystuje się w instrukcjach warunkowych w JavaScripcie"
cover_image: "/images/posts/operatory-porownania.jpg"
category: "JavaScript"
---

### Czym są operatory porównania?

Operatory porównania, inaczej nazywane operatorami relacyjnymi, bardzo często wykorzystuje się w instrukcjach warunkowych w JavaScripcie. Za ich pomocą można porównać lewą stronę wyrażenia do prawej. Wynikiem takiego porównania jest `boolean` czyli `true` albo `false`. Przykład:

```js
let a = 10;

console.log(a > 1); //true
console.log(a >= 1); //true
console.log(a < 1); //false
console.log(a <= 10); //true
```

Przyjrzyjmy się dwóm szczególnym operatorom czyli operator podwójnego `==` oraz potrójnego `===` porównania.

```js
console.log(a === 10); //true
console.log(a !== 10); //false
```

Powyższy przykład sprawdza czy wartość zmiennej `a` jest równa czy różna od `10`.

Różnica pomiędzy tymi operatorami jest taka, że operator `===` porównuje typ zmiennej oraz wartość.

```js
console.log(a === 10); //true
console.log(a === "10"); //false - ponieważ '10' jest typem string a nie number
```

Więcej problemów sprawia natomiast operator `==`. Tutaj występuje tzw. **niejawna konwersja typów** (więcej o konwersji przeczytasz <a href="/blog/konwersja-i-koercja-w-javascript" target="_blank" rel="noopener">tu</a>), która polega na zamiane typu który jest po prawej stronie do typu który znajduję się po stronie lewej.

```js
console.log(a == 10); //true
console.log(a == "10"); //true
console.log("10" == 10); //true, to jest to samo co ('10' == '10')
```

System konwersji w JavaScript jest bardzo rozbudowany i opiera się o swoje zasady, których nie sposób zapamiętać. Przyjrzyjmy się takiemu przypadkowi:

```js
console.log(true == "true");
```

Logicznym wydaje się, że jeżeli wartość po lewej stronie to `boolean`, to wartość po prawej zostanie przekonwertowana na `true`. Niestety nic bardziej mylnego:

```js
console.log(true == "true"); // false
```

Gdy zerkniemy do specyfikacji, zobaczymy że:

> If Type(x) is Boolean,
> return the result of the comparison ToNumber(x) == y.

Jeżeli pierwszą wartością jest `boolean` to następuje niejawna konwersja `boolean` na `number`. Dlatego też:

```js
Number(true); // 1
console.log(true == 1); // true => Number(true) == 1
console.log(true == 2); // false
console.log(true == "true"); // false => Number(true) != 'true'
```

Sytuacja wygląda inaczej jeżeli pierwszą wartością jest `number` a drugą `string`:

> If Type(x) is Number and Type(y) is String,
> return the result of the comparison x == ToNumber(y).

Wówczas należy przekonwertować drugą wartość na `number`

```js
console.log(1 == true); // true => 1 == Number(true)
console.log(1 == "true"); // false => 1 != Number('true')
Number("true"); // NaN - Należy pamiętać że w JavaScript NaN to number,
console.log(1 == NaN); //false
```

Podsumowując, najlepiej używać potrójnego operatora `===` oraz stosować jawną konwersję:

```js
console.log(true === Boolean("true")); // true
```

Operator `===` sprawdza czy wartości są takie same oraz czy mają ten sam typ. Nie zachodzą tutaj żadne niejawne konwersje a my unikniemy tym samym wielu problemów.
