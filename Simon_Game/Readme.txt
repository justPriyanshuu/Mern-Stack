# Simon Game - Complete JavaScript Explanation (Beginner Friendly)

## What is the Simon Game?

Simon is a memory-based game. A sequence of colored boxes flashes one by one, and the player must click the same boxes in the same order. With each level, a new box is added to the sequence.

---

## JavaScript Breakdown (Explained Simply Without Code)

### Variables

* gameSeq: Stores the correct color sequence the game shows.
* userSeq: Stores the colors the player clicks.
* started: A true/false flag to check if the game has begun.
* level: Keeps track of the current level.
* btns: List of box IDs ("one", "two", etc.) to randomly choose from.

### Starting the Game

* The game starts in two ways:

  1. Pressing a key on the keyboard.
  2. Clicking a "Start" button (added for mobile users).
* Once triggered, it sets `started` to true and calls the function to start the first level after a short delay.

### Flash Effects

* The selected game box flashes to show which box to remember.
* When the user clicks a box, it flashes in a different color to give feedback.

### Level Up

* Increases the level count.
* Shows the current level on the screen.
* Chooses a random box from the list and adds it to the game sequence.
* That box is flashed to indicate it to the player.

### Checking the Answer

* Compares the user’s clicked box with the game's correct sequence.
* If the user gets the full sequence correct, the game moves to the next level.
* If the user makes a mistake:

  * The screen flashes red.
  * A game over message is shown.
  * Game resets.

### Reset Game

* Sets everything back to the initial state: clears both sequences, sets level to 0, and marks the game as not started.

### When User Clicks a Box

* Captures which box was clicked.
* Gives visual feedback.
* Adds that color to the user's sequence.
* Checks the answer immediately.

### Button Event Listeners

* All the boxes are selected and an event listener is added to each one.
* When clicked, it runs the function that handles user clicks.

---

## Summary Table

| Feature        | Explanation                              |
| -------------- | ---------------------------------------- |
| Start Game     | Triggered by key press or Start button   |
| Flash Effect   | Shows box selection visually             |
| Level Up       | Adds one more step to game sequence      |
| User Clicks    | Stored and compared to game sequence     |
| Check Answer   | Matches user input with correct sequence |
| Reset Game     | Resets all data when user fails          |
| Mobile Support | Includes clickable button for starting   |

---

This project is ideal for beginners to learn about event listeners, arrays, UI interaction, and game logic with JavaScript. Enhancements can include sounds, animations, timers, and high scores.
