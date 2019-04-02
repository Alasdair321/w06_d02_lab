const assert = require('assert');
const Painter = require('../painter.js');
const Room = require('../room.js');
const PaintCan = require('../paintcan.js');

describe('room', () => {
  let painter;
  let room;
  beforeEach(() => {
    room = new Room(50, false);
  });

  it('should start not painted', () => {
    const actual = room.isPainted();
    assert.strictEqual(actual, `not painted`)
  });
  it('should be able to be painted', () => {
    const actual = room.paintRoom();
    assert.strictEqual(actual, true);
  });
  it('should have an area', () => {
    const actual = room.area;
    assert.strictEqual(actual, 50);
  });

});


describe('paintcan', () => {
  let paintcanempty;
  let paintcanstuff
  beforeEach(() => {
    paintcanstuff = new PaintCan(5);
    paintcanempty = new PaintCan(0);
  });

  it('should have volume', () => {
    const actual = paintcanstuff.volume;
    assert.strictEqual(actual, 5);
  });
  it('can be checked if empty 1', () => {
    const actual = paintcanstuff.isEmpty();
    assert.strictEqual(actual, false);
  });
  it('can be checked if empty 2', () => {
    const actual = paintcanempty.isEmpty();
    assert.strictEqual(actual, true);
  });
  it('can be emptied can with stuff', () => {
    const actual = paintcanstuff.emptyPaintCan();
    assert.strictEqual(actual, `empty`)
  });
  it('can be emptied empty can', () => {
    const actual = paintcanempty.emptyPaintCan();
    assert.strictEqual(actual, `already empty ya bam`);
  });

});

describe('painter', () => {
  let painter;
  beforeEach(() => {
    painter = new Painter(0);
  });
  
  it('should have empty stock o\' paint', () => {
    const actual = painter.stock;
    assert.strictEqual(actual, 0);
  });
  it('adds paint to stock', () => {
    const actual = painter.addPaint(1);
    assert.strictEqual(actual, 1);
  });

});
