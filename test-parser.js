// Quick test to verify the parser reads the WHY IT MATTERS section correctly
const fs = require('fs');

const content = fs.readFileSync('src/content/pages/marine-rv.md', 'utf8');
const parts = content.split(/^---$/m);
const body = parts.slice(2).join('---');
const sections = body.split('---').map(s => s.trim());

// Section 3 should be WHY IT MATTERS
const mattersSection = sections[3];

console.log('=== WHY IT MATTERS Section (first 600 chars) ===');
console.log(mattersSection.substring(0, 600));
console.log('\n=== Attempting to parse blocks ===\n');

const mattersBlocks = mattersSection.match(/\*\*\d+\.\s+(.*?)\*\*\s*\n([\s\S]*?)(?=(?:\*\*\d+\.|$))/g);

if (mattersBlocks) {
  console.log(`Found ${mattersBlocks.length} blocks:`);
  mattersBlocks.forEach((block, i) => {
    const lines = block.split('\n');
    const titleLine = lines[0].match(/\*\*\d+\.\s+(.*?)\*\*/);
    const title = titleLine?.[1]?.trim() || '';
    const points = lines.slice(1).filter(l => l.trim().startsWith('-')).map(l => l.replace(/^-\s*/, '').trim());
    
    console.log(`\nBlock ${i + 1}:`);
    console.log(`  Title: "${title}"`);
    console.log(`  Points: ${points.length}`);
    points.forEach((p, j) => console.log(`    ${j + 1}. ${p}`));
  });
} else {
  console.log('ERROR: No blocks found! The regex did not match.');
  console.log('\nLooking for pattern: **1. Title**');
  console.log('\nActual content contains:');
  const matches = mattersSection.match(/\*\*\d+\./g);
  console.log(matches ? matches.join(', ') : 'No numbered titles found');
}

