# 🛒 ShoppyGlobe – React E-commerce Application

ShoppyGlobe is a basic yet fully functional e-commerce web application built with **React**. It showcases a shopping experience with product listings, product details, cart management, and a smooth UI using modern React tools like **Redux**, **React Router**, and **custom hooks**.

---

## 🚀 Features

- 📦 Fetch and display products from external API
- 🔍 Product detail view with routing
- 🛒 Add and remove items from the cart using Redux
- 🧭 Navigation using React Router
- 🔄 Modify product quantities in the cart
- 🔎 Product search functionality
- ❌ 404 Not Found route handling
- 🧩 Lazy loading with React.lazy & Suspense
- 📱 Responsive design with custom CSS

---

## 🧱 Component Structure

- **App** – Main component managing routes
- **Header** – Navigation bar with shopping cart icon
- **ProductList** – Fetches and displays a list of products
- **ProductItem** – Single product with "Add to Cart" button
- **ProductDetail** – Detailed view of a product using URL parameters
- **Cart** – View all items in the cart with quantity controls
- **CartItem** – Represents individual items in the cart
- **NotFound** – 404 page for invalid routes

---

## 🧠 State Management

- **Redux Toolkit** is used to manage global state, particularly the cart.
- Actions and reducers handle adding/removing items and updating quantities.
- Custom selectors for accessing state efficiently.

---

## 🌐 Routing

Implemented using **React Router**:

- `/` – Home (Product list)
- `/product/:id` – Product details
- `/cart` – Shopping cart
- `/checkout` – Checkout page
- `*` – NotFound

---

## 🧰 Tech Stack

- React + Vite
- Redux Toolkit
- React Router DOM
- JavaScript (ES6+)
- CSS (Responsive Design)
- React.lazy & Suspense

---

## 🔧 Installation & Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Steps

```bash
git clone https://github.com/sangal29/Shopsy_app.git
cd Shopsy_app
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   └── NotFound.jsx
├── redux/
│   ├── store.js
│   └── cartSlice.js
├── hooks/
│   └── useFetchProducts.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📎 Submission

🔗 GitHub Repository: [https://github.com/sangal29/Shopsy_app](https://github.com/sangal29/Shopsy_app)

---

## 📧 Contact

📩 **rishabhsangal29@gmail.com**
