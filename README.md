


🛍️ ShoppyGlobe – A Modern React E-commerce App
ShoppyGlobe is a responsive and interactive e-commerce web application built using React. It offers a seamless shopping experience with product listings, detailed views, cart management, and modern UI/UX practices. Built with Redux Toolkit, React Router, and custom hooks, it demonstrates key frontend development skills.

🌐 Live Demo: symphonious-panda-a61d23.netlify.app
📦 GitHub Repo: github.com/sangal29/Shopsy_app

✨ Key Features
🔄 Product Fetching – Loads products dynamically from an external API

🔍 Detailed View – View individual product details using dynamic routing

🛒 Cart System – Add, remove, and update item quantities using Redux Toolkit

🧭 Routing – Navigate smoothly with React Router

🔎 Search Products – Find products using real-time search

⛔ 404 Handling – Clean "Not Found" page for unmatched routes

🚀 Lazy Loading – Optimized performance using React.lazy & Suspense

📱 Mobile-Friendly – Fully responsive UI using custom CSS

🧠 Tech Stack & Tools
Tech	Purpose
React	Frontend UI Framework
Vite	Lightning-fast build tool
Redux Toolkit	Global state management
React Router DOM	Client-side routing
JavaScript (ES6+)	Programming Language
CSS	Styling (Responsive Design)
React.lazy & Suspense	Code-splitting and lazy loading

🧩 Component Architecture
bash
Copy
Edit
src/
├── components/
│   ├── Header.jsx            # Navigation bar with cart
│   ├── ProductList.jsx       # Lists all products
│   ├── ProductItem.jsx       # Single product card
│   ├── ProductDetail.jsx     # Product description view
│   ├── Cart.jsx              # Full cart view
│   ├── CartItem.jsx          # Cart item with controls
│   └── NotFound.jsx          # 404 page
├── redux/
│   ├── store.js              # Redux store setup
│   └── cartSlice.js          # Cart slice with actions/reducers
├── hooks/
│   └── useFetchProducts.js   # Custom hook for API calls
├── App.jsx
├── main.jsx
└── index.css
🛠️ How to Run Locally
🔧 Prerequisites
Node.js ≥ 14.x

Git

🚀 Installation
bash
Copy
Edit
git clone https://github.com/sangal29/Shopsy_app.git
cd Shopsy_app
npm install
npm run dev
Visit 👉 http://localhost:5173 in your browser.

🌐 Routing Overview
Route	Purpose
/	Home – displays all products
/product/:id	Detailed product view
/cart	Cart with added items
/checkout	Checkout page (future scope)
*	NotFound route (404)

