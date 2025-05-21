# Exercise 3

Write an algorithm and draw a flowchart that will read three numbers and prints the value of the largest number.

## Code:

```plaintext
Start
Input Num1, Num2, Num3
If Num1 > Num2 and Num1 > Num3, Print Num1
Else if Num2 > Num1 and Num2 > Num3, Print Num2
Else Print Num3
End
```

```ts
function findMax(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
```

## Flowchart

<img src="/flowcharts/exercise3.png">
