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
    // Si no hay un valor en esa posición, creamos un nuevo objeto y lo asignamos a esa posición
    table[index] = {};
  }
  // Insertamos el valor en el objeto correspondiente
  table[index][key] = value;
}

// Definimos una función para buscar un elemento en la tabla hash
function searchInTable(key) {
  const index = hashFunc(key); // Aplicamos la función hash para obtener la posición en la tabla
  if (!table[index]) {
    // Si no hay un valor en esa posición, el elemento no está en la tabla
    return null;
  }
  // Buscamos el elemento en el objeto correspondiente
  return table[index][key] || null;
}

// Ejemplo de uso
insertToTable('Juan', 25);
insertToTable('María', 30);
console.log(searchInTable('Juan')); // Devuelve 25
console.log(searchInTable('Pedro')); // Devuelve null
