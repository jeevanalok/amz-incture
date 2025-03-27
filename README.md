# Amazon Clone - React + Vite

This project is a simplified Amazon UI clone built using React, Vite, and React Bootstrap. It incorporates features like product listings, cart management, theme switching, and a basic checkout process.

## Folder Structure

```
amazon-clone/
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── eslint.config.js       # ESLint configuration file
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── src/                   # Source code directory
│   ├── App.css            # Global styles
│   ├── App.jsx            # Main application component
│   ├── index.css          # Index styles
│   ├── main.jsx           # Entry point for React
│   ├── apis/              # API related files
│   │   └── fetchProducts.js # Mock API call to fetch product data
│   ├── assets/            # Static assets (images, etc.)
│   │   ├── dark-logo.png  # Dark theme logo
│   │   ├── logo.png       # Light theme logo
│   │   └── ...
│   ├── components/        # Reusable React components
│   │   ├── Banner.jsx     # Banner component
│   │   ├── ErrorBoundary.jsx # Error boundary component
│   │   ├── Loader.jsx     # Loader component
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   ├── ProductCard.jsx # Product card component
│   │   
│   ├── context/           # React context providers
│   │   ├── CartContext.jsx  # Cart context
│   │   ├── ThemeContext.jsx # Theme context
│   │   └── ...
│   ├── pages/             # Application pages
│   │   ├── CartPage.jsx   # Cart page
│   │   ├── CheckoutPage.jsx # Checkout page
│   │   ├── Home.jsx       # Home page
│   │   ├── Login.jsx      # Login page
│   │   ├── PageNotFound.jsx # 404 page
│   │   ├── ProductDetail.jsx # Product detail page
│   │   ├── ProductSearchResults.jsx # Product search results page
│   │   └── ...
│   ├── utils/             # Utility functions and data
│   │   └── productData.js # Mock product data
│   └── vite-env.d.ts      # Vite environment declaration
├── vite.config.js         # Vite configuration file
```

## Packages Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** For routing and navigation.
*   **React Bootstrap:** A UI library for building responsive layouts.
*   **React Feather:** For icons.
*   **Vite:** A build tool that provides a fast and optimized development experience.
*   **ESLint:** For linting JavaScript and JSX code.

## Setup Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd amazon-clone
    ```
2.  **Install dependencies:**

    ```bash
    npm install # or yarn install or pnpm install
    ```
3.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

    This will start the application in development mode. Open your browser and navigate to `http://localhost:5173` (or the URL provided by Vite) to view the application.

## Key Features

*   **Product Listings:** Displays a list of products fetched from a mock API.
*   **Cart Management:** Allows users to add, remove, and update quantities of products in their cart.  Cart data is persisted in local storage.
*   **Theme Switching:**  Users can toggle between light and dark themes.  Theme preference is persisted in local storage.
*   **Search:** Users can search for products.
*   **Checkout Process:** A basic checkout page with form validation.
*   **Error Handling:** Implemented using ErrorBoundary component.
*   **Responsive Design:** The application is designed to be responsive and work on different screen sizes.


