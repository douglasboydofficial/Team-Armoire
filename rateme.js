// rate_me.js

// Generate AI-style comment based on a 1-10 rating
function generateAIComment(rating, item, isSheryl = false) {
  const comments = {
    1: `“${item}” needs a lot of work. Very poor performance.`,
    2: `“${item}” is quite lacking. Significant improvements needed.`,
    3: `“${item}” is below average. Could be better.`,
    4: `“${item}” is slightly below expectations.`,
    5: `“${item}” is average. It’s okay but not remarkable.`,
    6: `“${item}” is a bit above average. Nice effort.`,
    7: `“${item}” is good! Enjoyable and solid.`,
    8: `“${item}” is very good! Exceeds expectations.`,
    9: `“${item}” is excellent! Highly impressive.`,
    10: `“${item}” is outstanding! Perfect score!`
  };

  let baseComment = comments[rating] || `“${item}” has a rating of ${rating}.`;
  if (isSheryl) {
    baseComment += `<br><em>This was put in to satiate the Quality Inspector and to maintain current 'employment'.</em>`;
  }
  return baseComment;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ratingForm');
  const resultDiv = document.getElementById('aiRatingResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = document.getElementById('item').value.trim();
    if (!item) return;

    // Check if input is "Sheryl"
    const isSheryl = item.toLowerCase() === 'sheryl';
    const aiRating = isSheryl ? 10 : Math.floor(Math.random() * 10) + 1;

    // Display the result
    resultDiv.innerHTML = `
      <h3>AI Rating for “${item}”: ${aiRating} / 10</h3>
      <p>${generateAIComment(aiRating, item, isSheryl)}</p>
    `;
  });
});
