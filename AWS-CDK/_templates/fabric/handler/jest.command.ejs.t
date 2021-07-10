---
inject: true
to: package.json
after: scripts
skip_if: test:spec:<%= name %>.handler
---
    "test:spec:<%= name %>.handler": "jest ./src/handlers/__tests__/<%= name %>.handler.spec.js",
