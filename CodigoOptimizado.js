class HashTable {
  constructor() {
    this.blockSize = 100; // Tamaño de bloque
    this.blocks = [[]]; // Bloques contiguos para almacenamiento eficiente
    this.numElements = 0; // Número de elementos almacenados
  }

  put(key, value) {
    const index = this.hashIndex(key);
    if (!this.blocks[index.blockIndex]) {
      this.blocks[index.blockIndex] = new Array(this.blockSize);
    }
    if (!this.blocks[index.blockIndex][index.index]) {
      this.blocks[index.blockIndex][index.index] = [];
    }
    for (let i = 0; i < this.blocks[index.blockIndex][index.index].length; i++) {
      if (this.blocks[index.blockIndex][index.index][i].key === key) {
        this.blocks[index.blockIndex][index.index][i].value = value;
        return;
      }
    }
    this.blocks[index.blockIndex][index.index].push({ key, value });
    this.numElements++;
  }

  get(key) {
    const index = this.hashIndex(key);
    if (!this.blocks[index.blockIndex] || !this.blocks[index.blockIndex][index.index]) {
      return undefined;
    }
    for (let i = 0; i < this.blocks[index.blockIndex][index.index].length; i++) {
      if (this.blocks[index.blockIndex][index.index][i].key === key) {
        return this.blocks[index.blockIndex][index.index][i].value;
      }
    }
    return undefined;
  }

  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash &= hash; // Convertir a 32 bits
    }
    return hash;
  }

  hashIndex(key) {
    const hash = this.hashFunction(key);
    const blockIndex = Math.floor(this.numElements / this.blockSize);
    const index = (hash % this.blockSize + this.numElements) % this.blockSize;
    return { blockIndex, index };
  }
}
