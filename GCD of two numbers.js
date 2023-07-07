var a = 45,
  b = 75,
  GCD= 0,
  Lcm = 0;
var mul = a * b;
//product of two numbers=GCD*LCM
//we have to find GCD(Greatest Common Divisior)First
for (var i = 1; i <= a; i++) {
  if (a % i == 0 && b % i == 0) {
    GCD = i;
  }
}
console.log(GCD);
alert("hello")