<template>
  <div class="tictactoe">
    <h2 class="title">Tic Tac Toe</h2>
    <div class="board">
      <div
        class="cell"
        v-for="(cell, index) in board"
        :key="index"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div class="status">{{ status }}</div>
    <button @click="resetGame" class="reset-button">Reset Game</button>
  </div>
</template>

<script>
export default {
  name: 'CreativePage',
  data() {
    return {
      board: Array(9).fill(null), // Represents the 9 cells of the Tic Tac Toe board
      currentPlayer: 'X', // Tracks the current player
      status: 'Current Player: X', // Displays the current player's status
    };
  },
  methods: {
    makeMove(index) {
      // Ignore the move if the cell is already filled or if the game is over
      if (this.board[index] || this.checkWinner()) return;

      // Directly set the player's mark on the board
      this.board[index] = this.currentPlayer; // Use direct assignment instead of $set

      if (this.checkWinner()) {
        this.status = `Player ${this.currentPlayer} Wins!`;
      } else if (this.board.every(cell => cell)) {
        this.status = "It's a Draw!";
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Switch players
        this.status = `Current Player: ${this.currentPlayer}`;
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          return true; // A player has won
        }
      }
      return false; // No winner yet
    },
    resetGame() {
      this.board = Array(9).fill(null); // Reset the board
      this.currentPlayer = 'X'; // Reset current player
      this.status = 'Current Player: X'; // Reset status
    },
  },
};
</script>

<style scoped>
.tictactoe {
  display: flex; /* Use flexbox to center the content */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  
  margin-top: -50px;
}

.title {
  font-size: 2.5rem; /* Increase title font size */
  color: #fff; /* White color for the title */
  margin-bottom: 20px; /* Space below the title */
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
 
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem; /* Increase font size for the cells */
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cell:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.status {
  margin: 20px 0;
  font-size: 1.5rem; /* Increase font size for status */
  color: #fff; /* White color for status text */
}

.reset-button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.reset-button:hover {
  background-color: #0056b3;
}
</style>
