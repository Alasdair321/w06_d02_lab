const PaintCan = function(volume) {
  this.volume = volume;
}

PaintCan.prototype.isEmpty = function () {
  if (this.volume === 0) {
    return true;
  } else {
    return false;
  }
};

PaintCan.prototype.emptyPaintCan = function () {
  if (this.volume > 0) {
    this.volume = 0;
    return `empty`;
  } else {
    return `already empty ya bam`;
  }
}

module.exports = PaintCan;
