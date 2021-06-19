
function generateMagicSquare(size) {
    //создаем пустой массив данных
    let square = []
    //создаем переменные для позиций х и у
    let x = 0

    let y = (size - 1) / 2
    //заполняем массив нулевыми значениями
    for (let i = 0; i < size; i++) {
      square[i] = []
      
      for (let j = 0; j < size; j++) {
        square[i][j] = 0
      }
    }
    //заполняем массив числами - кол-во итераций равно квадрату размера матрицы
    for (let i = 0; i < size ** 2; i++) {
      pos(i + 1)
    }
    //функция с правилами заполнения, которой передается аргумент value равный квадрату размера матрицы
    function pos(value) {
      //заполнение ячейки соответствующей рассчитанным значениям x и y
      square[x][y] = value
      //создание переменных для сохранения текущих значений x и y или текущих положений числа
      let tx = x
      let ty = y
      //уменьшаем значение x на 1
      x--
      //если значение x меньше нуля, то прибавляем к переменной x число равное размеру матрицы
      if (x < 0) {
        x += size
      }
      //все тоже самое проделываем с переменной `y`
      y--
      if (y < 0) {
        y += size
      }
  
      //если число в ячейке не равно 0
      if (square[x][y] !== 0) {
        //то к переменной tx прибавляется 1 и сохраняется в переменной x
        x = tx + 1
        //если переменная x равна размеру матрицы
        if (x === size) {
          //то x приравнивается к 0
          x = 0
        }
        //приравниваем y к значению ty, т.е. "адресу" последнего числа
        y = ty
      }
    }
    //возврат матрицы в консоль
     return square
    // return squareOutput(square)
  }

//Вывод матрицы на веб страницу. НЕ РЕАЛИЗОВАНО 
// function squareOutput(square){
//   const table = document.querySelector('#squareOut')
//     for(let i = 0; i < square.length; i++){
//       var tr = document.createElement('tr')

//         for (let j = 0; j < square[i].length; j++){
//           var td = document.createElement('td')
//           td.innerHTML = square[i][j]
//           tr.appendChild(td)
//         }
        
//       table.appendChild(tr)
//     }
//}

  //проверка является ли квадрат магическим
  function isMagic(square) {
    let N = square.length
    //diagonalSum1 и diagonalSum2 - сумма чисел по диагоналям
    let diagonalSum1 = 0,
      diagonalSum2 = 0
    for (let i = 0; i < N; i++) {
      // (i, i) - диагональ с верхнего левого угла до нижнего правого
      // (i, N - i - 1) - диагональ с верхнего правого до нижнего левого угла
      diagonalSum1 += square[i][i]
      diagonalSum2 += square[i][N - 1 - i]
    }
    // если диагональные суммы не равны, то это не магический квадрат
    if (diagonalSum1 != diagonalSum2) return false
  
    // если суммы строк и столбцов не равны, то это не магический квадрат
    for (let i = 0; i < N; i++) {
      let colSum = 0
      let rowSum = 0
      for (let j = 0; j < N; j++) {
        rowSum += square[i][j]
        colSum += square[j][i]
      }
//      const result = (rowSum != colSum || colSum != diagonalSum1) ? false : true
      if (rowSum != colSum || colSum != diagonalSum1) return false
    }
    return true
  }
  
  let size = parseInt(prompt('Введите размер квадрата (нечетный): '))
//  generateMagicSquare(size)
  console.log(generateMagicSquare(size))
  console.log(isMagic(generateMagicSquare(size)))
