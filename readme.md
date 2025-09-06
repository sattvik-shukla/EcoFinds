# EcoFinds - Sustainable Second-Hand Marketplace

An e-commerce platform built as a learning project, designed as a marketplace for users to buy and sell second-hand goods, promoting a circular economy. This project was built by adapting a template to fulfill a specific set of requirements, focusing on converting a standard e-commerce store into a multi-vendor platform.

---

## Key Features

* **Full User Authentication:** Secure user registration and login.
* **Marketplace Functionality (C2C):**
    * Any registered user can create a new product listing.
    * Users have a "My Listings" page to view, **edit**, and **delete** their own products.
* **Core E-commerce Features:**
    * Product browsing and keyword search.
    * Shopping cart functionality.
    * User profiles with order history.
* **Custom Rebranding:** Updated branding, logos, and currency to match the "EcoFinds" theme.

---

## Technologies Used

This project is built with the MERN stack:

* **MongoDB:** NoSQL database for storing user and product data.
* **Express:** Backend framework for building the REST API.
* **React:** Frontend library for the user interface.
* **Node.js:** JavaScript runtime for the server-side.

---

## Setup & Installation

To run this project locally:

1.  Clone the repository.
2.  Install backend dependencies: `npm install`
3.  Install frontend dependencies: `cd frontend && npm install`
4.  Create a `.env` file in the root directory and add your `MONGO_URI` connection string.
5.  Load sample data: `npm run data:import`
6.  Run both servers concurrently: `npm run dev`