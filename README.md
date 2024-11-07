# Multi-File JavaScript Modules

This project demonstrates how to use ES modules in JavaScript by importing and exporting arrays across multiple files (`a.js`, `b.js`, and `c.js`). This setup helps understand modular JavaScript structure and ES6 import/export syntax.

## Files

- **a.js**: Defines and exports array `a1`.
- **b.js**: Defines and exports array `b2`.
- **c.js**: Imports `a1` and `b2`, combines them, and performs example operations.

## Usage

### Running Locally

#### In Node.js
1. Ensure your `package.json` has `"type": "module"` to enable ES module support.
2. Run `c.js` using Node.js:
   ```bash
   node c.js
