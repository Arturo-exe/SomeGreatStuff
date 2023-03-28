// Definimos una función hash muy simple que devuelve la longitud de la cadena
function hashFunc(str) {
  return str.length;
}

// Creamos nuestra tabla hash vacía
const table = {};

// Definimos una función para insertar un elemento en la tabla hash
function insertToTable(key, value) {
  const index = hashFunc(key); // Aplicamos la función hash para obtener la posición en la tabla
  if (!table[index]) {
    // Si no hay un valor en esa posición, creamos un nuevo arreglo y lo asignamos a esa posición
    table[index] = [];
  }
  // Insertamos el valor en el arreglo correspondiente
  table[index].push({ key, value });
}

// Definimos una función para buscar un elemento en la tabla hash
function searchInTable(key) {
  const index = hashFunc(key); // Aplicamos la función hash para obtener la posición en la tabla
  if (!table[index]) {
    // Si no hay un valor en esa posición, el elemento no está en la tabla
    return null;
  }
  // Buscamos el elemento en el arreglo correspondiente
  for (let i = 0; i < table[index].length; i++) {
    if (table[index][i].key === key) {
      // Si encontramos el elemento, lo devolvemos
      return table[index][i].value;
    }
  }
  // Si no encontramos el elemento, devuelve null
  return null;
}

// Ejemplo de uso
insertToTable('Juan', 25);
insertToTable('María', 30);
console.log(searchInTable('Juan')); // Devuelve 25
console.log(searchInTable('Pedro')); // Devuelve null
