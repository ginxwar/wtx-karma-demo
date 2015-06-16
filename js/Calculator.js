function Calculator(value) {
  this.value = value;
}

Calculator.prototype.getValue = function() {
  return this.value;
};

Calculator.prototype.add = function(value) {
  return this.value + value;
};

Calculator.prototype.subtract = function(value) {
  return this.value - value;
};
