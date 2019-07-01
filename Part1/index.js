console.log('this is running')

let board = []

function play(clickedID) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedID)

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedID] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedID] = 'O'
    }
    console.log(board);

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    //I didn't type this all out, but I understand the logic behind it and 
    //went over it with Sam.  Ain't nobody got time for that....
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
      }
      if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
      }
      if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
      }
      if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
      }
    
      // DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS
      let boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
    }



