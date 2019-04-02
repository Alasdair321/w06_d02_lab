const Painter = function(stock) {
  this.stock = stock;
}

Painter.prototype.addPaint = function (paint) {
  return this.stock += paint;
};

module.exports = Painter;
