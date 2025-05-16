# Principles Demonstrated in Lab 1

This project demonstrates multiple core **programming principles**, as required by the lab. Each principle below is supported by links to relevant files and lines of code.

---

## 1. DRY — Don't Repeat Yourself
Avoids duplication by encapsulating behavior in reusable classes and methods.

- [Money.js: lines 5-15](./lab1/src/models/Money.js#L5-L15): normalization of currency is done in one place — `normalize()` method.
- [Warehouse.js: lines 12-30](./lab1/src/models/Warehouse.js#L12-L30): method `addProduct` handles logic for adding products instead of repeating it elsewhere.

---

## 2. KISS — Keep It Simple, Stupid
Code remains simple, readable, and not over-engineered.

- [Product.js: entire file](./lab1/src/models/Product.js): Straightforward logic to adjust product price.
- [index.js: lines 5-40](./lab1/src/index.js#L5-L40): Clean, linear `main()` method demonstrating object interaction.

---

## 3. YAGNI — You Ain't Gonna Need It
No over-abstraction or unused generalization.

- No base class for `Product` or `Money`, since inheritance is not required.
- Features like tax calculation, currencies, or multi-language aren't added unnecessarily.

---

## 4. Composition Over Inheritance
All class logic is built via **composition**, not inheritance.

- [Warehouse.js](./lab1/src/models/Warehouse.js) uses `Product` instances internally.
- [OrderCart.js](./lab1/src/models/OrderCart.js) is composed of `Product` references.

---

## 5. Fail Fast
Validation and bounds are checked early.

- [Product.js: lines 10-13](./lab1/src/models/Product.js#L10-L13): prevents price from going below zero.
- [Warehouse.js: line 35](./lab1/src/models/Warehouse.js#L35): checks for product existence before shipping.

---

## SOLID Principles

### S — Single Responsibility Principle
Each class does one thing only.
- `Money`: handles currency math
- `Product`: handles product info
- `Warehouse`: handles storage

### O — Open/Closed Principle
Open for extension, closed for modification.
- [Reporting.js: lines 10-35](./lab1/src/models/Reporting.js#L10-L35): allows more reporting logic to be added without touching `Warehouse`.

### L — Liskov Substitution Principle
Although no inheritance is used, no component breaks expectations.

### I — Interface Segregation Principle
Not directly applicable in JavaScript, but each class exposes only relevant methods.

### D — Dependency Inversion Principle
`Reporting` depends on the `Warehouse` interface-like behavior, not concrete internals.
- [Reporting.js: constructor](./lab1/src/models/Reporting.js#L5)

---

## Additional Notes
- Unit tests in [main.test.mjs](./lab1/test/main.test.mjs) validate object interactions.
- The project is modular, readable, and well-aligned with software engineering principles.

---

**Author**: Arthur Nekrasov IPZ-23-3  
**Lab**: KPZ — Lab 1 (Software Construction)
