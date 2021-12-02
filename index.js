function fn(...element) {
    if (!element.every((el) => el < 40))
      throw "This ain't gon work";
    return element.reduce((a, b) => a + b)
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.