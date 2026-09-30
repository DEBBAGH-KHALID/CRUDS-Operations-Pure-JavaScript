Product Management System

A simple Product Management System built with HTML, CSS, and JavaScript.

This project allows users to create, display, update, delete, and search products. The data is stored in the browser using LocalStorage, so products remain available after refreshing the page.

Features
Add new products
Update existing products
Delete products
Delete all products
Automatically calculate the product total
 Search products by title
 Search products by category
 Save products using localStorage
 Automatically display saved products after page refresh
 Search dynamically while typing
 Product Information

Each product contains:

Title
Price
Taxes
Ads
Discount
Count
Total
Category

The total is calculated automatically using:

Total = Price + Taxes + Ads - Discount
🔎 Search System

The project provides two search modes:

Search By Title

Searches for products whose title starts with the entered text.

For example:

Input: ip

iPhone
iPad
Search By Category

Searches for products whose category starts with the entered text.

The search is updated automatically while typing.

💾 LocalStorage

The project uses the browser's localStorage to save the products.

Example:

localStorage.setItem("products", JSON.stringify(products));

When the page is opened again, the saved products are loaded automatically:

products = JSON.parse(localStorage.products);
🛠️ Technologies Used
HTML5
CSS3
JavaScript
DOM Manipulation
LocalStorage
📁 Project Structure
Product-Management/
│
├── index.html
├── style.css
├── script.js
└── README.md
▶️ How to Run
download the project.
Open the project folder.
Open index.html in your browser.

You can also use Live Server in Visual Studio Code for easier development.

🎯 Project Objective

The main objective of this project is to practice JavaScript fundamentals such as:

Variables
Functions
Arrays and Objects
Loops
DOM manipulation
Events
localStorage
setTimeout()
Search and filtering
CRUD operations
📌 CRUD Operations

The application follows the basic CRUD concept:

Operation	Description
Create	Add a new product
Read	Display products
Update	Modify an existing product
Delete	Remove a product
👨‍💻 Author

Developed as a JavaScript practice project to improve frontend development and DOM manipulation skills.
