// Simple tests
const { add, subtract } = require('./index.js');

console.log('Running tests...');

// Test 1
if (add(2, 3) === 5) {
    console.log('✓ Add test passed');
} else {
    console.log('✗ Add test failed');
    process.exit(1);
}

// Test 2
if (subtract(5, 3) === 2) {
    console.log('✓ Subtract test passed');
} else {
    console.log('✗ Subtract test failed');
    process.exit(1);
}

console.log('All tests passed!');
