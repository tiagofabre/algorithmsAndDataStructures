let Vector = require('./vector')

let vec = new Vector();


describe("Vector usage tests", function() {
  it("Default size should be 0", function() {
    expect(vec.size()).toBe(0);
  });

  it("Default capacity should be 16", function() {
    expect(vec.capacity()).toBe(16);
  });

  it("By defaults it should be empty", function() {
    expect(vec.isEmpty()).toBe(true);
  });

  it("After insert data vector should not be empty anymore", function() {
    vec.push(10);
    expect(vec.isEmpty()).toBe(false);
  });

  it("Should insert from left to right", function() {
    vec.push(100);
    vec.push(11);
    vec.push(12);
    vec.push(13);
    vec.push(14);
    
    expect(vec.at(0)).toBe(10);
    expect(vec.at(1)).toBe(100);
    expect(vec.at(2)).toBe(11);
    expect(vec.at(3)).toBe(12);
    expect(vec.at(4)).toBe(13);
    expect(vec.at(5)).toBe(14);
  });

  it("Should insert in the meddle and keep the order", function() {
    vec.insert(800, 3);
    
    expect(vec.at(1)).toBe(100);
    expect(vec.at(2)).toBe(11);
    expect(vec.at(3)).toBe(800);
    expect(vec.at(4)).toBe(12);
  });

  it("Should insert in the start of the vector", function() {
    vec.prepend(99);
    expect(vec.at(0)).toBe(99);
    expect(vec.at(1)).toBe(10);
  });

  it("should pop", function() {
    let currentSize = vec.size();
    let futurelast = vec.at(vec.size()-1);

    vec.pop();
    expect(vec.size()).toBe(currentSize-1);
    expect(vec.at(vec.size())).toBe(futurelast);
  });

  it("Should delete in the middle", function() {
    let position2 = vec.at(2);
    vec.deleteItem(1);
    expect(position2).toBe(vec.at(1));
  });

  it("Should find by value", function() {
    vec.push(8999);
    expect(vec.find(8999)).toBe(6);

    expect(vec.find(777)).toBe(-1);
  });

  it("Should remove itens by value", function() {

    vec.push(33);
    vec.push(33);
    vec.insert(33,3);

    let oldSize = vec.size();
    // expect(vec.data).toBe(oldSize);
    
    vec.remove(33);
    // expect(vec.data).toBe(oldSize);
    expect(vec.size()).toBe(oldSize -3);
    expect(vec.find(33)).toBe(-1);
  });

  it("Should resize the vector", function() {
    vec.resize(300);
    expect(vec.capacity()).toBe(300);
  });


  it("Should automatically resize UP the vector", function() {
    vec.resize(3);
    expect(vec.capacity()).toBe(3);
    vec.push(1)
    expect(vec.capacity()).toBe(6);
    vec.push(2)
    vec.push(3)
    expect(vec.capacity()).toBe(12);
    vec.push(4)
    vec.push(5)
    vec.push(6)
    vec.push(7)
    vec.push(8)
    vec.push(9)
    vec.push(10)
    expect(vec.capacity()).toBe(24);
    vec.push(11)
    vec.push(12)
    expect(vec.capacity()).toBe(24);
  });

  it("Should resize DOWN the vector", function() {
    
    for(let i=0; i < 9; i++)
      vec.pop();

    expect(vec.capacity()).toBe(12);
  });

});


