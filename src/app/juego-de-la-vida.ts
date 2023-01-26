export class JuegoDeLaVida {
    public tablero: number[][];
    private filas: number;
    private columnas: number;

    constructor(filas: number, columnas: number) {
        // Inicializar las propiedades del tablero
        this.filas = filas;
        this.columnas = columnas;
        this.tablero = new Array(filas);
        for (let i = 0; i < filas; i++) {
            this.tablero[i] = new Array(columnas);
        }
    }

    public inicializarAleatoriamente() {
        // Inicializar el tablero con valores aleatorios
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.tablero[i][j] = Math.round(Math.random());
            }
        }
    }

    public siguientePaso() {
        let nuevoTablero = new Array(this.filas);
        for (let i = 0; i < this.filas; i++) {
            nuevoTablero[i] = new Array(this.columnas);
        }

        // Calcular el estado de cada celda en el próximo paso
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                let vecinos = this.contarVecinos(i, j);
                if (this.tablero[i][j] === 1 && (vecinos < 2 || vecinos > 3)) {
                    nuevoTablero[i][j] = 0;
                } else if (this.tablero[i][j] === 0 && vecinos === 3) {
                    nuevoTablero[i][j] = 1;
                } else {
                    nuevoTablero[i][j] = this.tablero[i][j];
                }
            }
        }

        // Actualizar el tablero
        this.tablero = nuevoTablero;
    }

    private contarVecinos(fila: number, columna: number) {
        // Contar el número de células vivas alrededor de una celda dada
        let vecinos = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) {
                    continue;
                }
                let x = fila + i;
                let y = columna + j;
                if (x >= 0 && x < this.filas && y >= 0 && y < this.columnas) {
                    vecinos += this.tablero[x][y];
                }
            }
        }
        return vecinos;
    }
}
