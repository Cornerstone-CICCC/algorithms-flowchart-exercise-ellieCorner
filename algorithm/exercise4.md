# Exercise 4

Write an algorithm and draw a flowchart to check the three number inputs whether a triangle is possible or not.

## Code:

```plaintext
Start
Input A, B, C
If A + B > C and A + C > B and B + C > A
    Print "Triangle is possible"
Else
    Print "Triangle is not possible"
End
```

```ts
function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a
    ? "Triangle is possible"
    : "Triangle is not possible";
}
```

## Flowchart

<img src="/flowcharts/exercise4.png">
