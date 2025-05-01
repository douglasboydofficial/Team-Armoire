const readline = require('readline');

// Set up CLI input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for a rating
rl.question("How would you rate your day from 1 to 10? ", (input) => {
  const rating = parseInt(input);

  if (isNaN(rating) || rating < 1 || rating > 10) {
    console.log("❌ Please enter a number between 1 and 10.");
  } else {
    console.log("✅ Thanks for your input!");

    if (rating <= 3) {
      console.log("😟 Sorry to hear that. Hope tomorrow's better!");
    } else if (rating <= 7) {
      console.log("🙂 Sounds like an average day.");
    } else {
      console.log("😄 Awesome! Glad you had a great day!");
    }
  }

  rl.close();
});
