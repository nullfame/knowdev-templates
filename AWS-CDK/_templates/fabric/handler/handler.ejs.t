---
to: src/handlers/<%= name %>.handler.js
---
//
//
// Constants
//

//
//
// Helper Functions
//

//
//
// Handler
//

const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};

//
//
// Export
//

module.exports = handler;
