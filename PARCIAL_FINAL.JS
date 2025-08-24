// Nodo de la lista enlazada
class Nodo {
  constructor(paquete) {
    this.paquete = paquete; // Información del paquete
    this.siguiente = null;  // Enlace al siguiente nodo
  }
}

// Clase Cola (Queue)
class ColaPaquetes {
  constructor() {
    this.inicio = null; // primer nodo
    this.final = null;  // último nodo
    this.tamaño = 0;
  }

  // Agregar paquete al final (enqueue)
  agregar(paquete) {
    const nuevo = new Nodo(paquete);

    if (this.final) {
      this.final.siguiente = nuevo;
    } else {
      this.inicio = nuevo;
    }

    this.final = nuevo;
    this.tamaño++;
  }

  // Eliminar paquete del inicio (dequeue)
  despachar() {
    if (!this.inicio) {
      console.log("No hay paquetes en tránsito.");
      return null;
    }

    const paquete = this.inicio.paquete;
    this.inicio = this.inicio.siguiente;

    if (!this.inicio) {
      this.final = null; // Si se vacía la cola
    }

    this.tamaño--;
    return paquete;
  }

  // Ver el siguiente paquete en salir
  verSiguiente() {
    return this.inicio ? this.inicio.paquete : null;
  }

  // Tamaño de la cola
  contar() {
    return this.tamaño;
  }
}

// Ejemplo de uso
const sistema = new ColaPaquetes();

sistema.agregar("Paquete 1");
sistema.agregar("Paquete 2");
sistema.agregar("Paquete 3");

console.log("Siguiente en salir:", sistema.verSiguiente()); // Paquete 1
console.log("Despachado:", sistema.despachar()); // Paquete 1
console.log("Siguiente en salir:", sistema.verSiguiente()); // Paquete 2
