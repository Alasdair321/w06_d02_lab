const Room = function(area, painted) {
    this.area = area;
    this.painted = painted;
}

Room.prototype.isPainted = function () {
  if (this.painted === true) {
    return `painted`;
  } else {
    return `not painted`;
  }
};

Room.prototype.paintRoom = function () {
  if (this.painted === false) {
    return this.painted = true;
  } else {
    return this.painted;
  }
};

module.exports = Room;
