function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
    ? "Triangle is possible"
    : "Triangle is not possible";
}
