Data Grid using Node.js and React

Project Overview
This project implements a simple data grid using React.js for the frontend and Node.js (with Express) for the backend. The application allows users to:

View a paginated list of products.
Filter products by branch.
Perform dynamic total price calculations.
Sort products.
Delete products from the list.
Interact with the backend API for data binding.

Features
Frontend:
Product grid displayed with pagination, sorting, and total calculation.
Dropdown for filtering products by branch.
Button to delete products.

Backend:
API to fetch paginated products (GET /api/products).
API to delete a product by ID (DELETE /api/products/:id).

Tech Stack
Frontend: React.js, TypeScript, CSS Modules
Backend: Node.js, Express.js
Database: In-memory (Product data stored as a static array)
Pagination: Server-side pagination for better performance
Setup Instructions

Prerequisites
Ensure you have the following installed on your machine:

Node.js (Latest LTS version)
npm or yarn
1. Clone the Repository
Clone this repository to your local machine:

bash
git clone https://github.com/ijasami/data-grid-using-nodejs-and-reactjs.git
cd data-grid-using-nodejs-and-reactjs

2. Install Dependencies
Backend
Navigate to the backend directory and install the dependencies:

bash
cd backend
npm install
Frontend
Navigate to the frontend directory and install the dependencies:

bash
cd frontend
npm install

3. Running the Application
Backend
To start the backend server:

bash
cd backend
npm start
The backend will be running on http://localhost:5000.

Frontend
To start the frontend application:

bash
cd frontend
npm start
The frontend will be available at http://localhost:3000.

4. API Endpoints
GET /api/products?page={page}&limit={limit} - Fetch paginated products.
DELETE /api/products/{id} - Delete a product by its ID.

Usage
Open the React app in your browser (http://localhost:3000).
The product grid will be displayed with columns for the product's name, price, quantity, and branch.
Use the Filter by Branch dropdown to filter products by their respective branches.
The Delete button allows you to remove products from the list.
The total price of the products displayed is dynamically calculated and updated.

Testing
To test the backend and frontend:

Open the frontend and interact with the product grid.
Use the Delete button to remove products, and verify the change both in the frontend UI and in the backend API response.
Bonus Features
Test Cases: The code can be extended with test cases for both frontend and backend.
No Third-Party CSS Libraries: The frontend is styled using only custom CSS (no third-party libraries).
React + TypeScript: The project uses TypeScript for type safety and better development experience.

Folder Structure
product-grid-using-nodejs-react/
  ├── backend/
      ├── controllers/
          ├── productController.ts
      ├── routes/
          ├── products.ts
      ├── data/
          ├── products.ts
      ├── index.ts
  ├── frontend/
      src/
      ├── components/
          │   ├── DataGrid/
          │   │   ├── DataGrid.tsx
          │   │   ├── TableHeader.tsx
          │   │   ├── Pagination.tsx
          │   │   ├── Dropdown.tsx
          │   │   ├── Row.tsx
      ├── styles/
      │   ├── DataGrid.module.css
      ├── utils/
      │   ├── helper.ts
      │   └── constants.ts
      ├── types/
      │   ├── product.ts
