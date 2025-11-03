# LMart

A modern e-commerce web application built with React and Vite, featuring a responsive design with Tailwind CSS.

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- React Router Dom
- Axios for API calls

## Project Structure

```
lmart/
├── public/
├── src/
│   ├── Components/
│   │   ├── CartCard.jsx
│   │   ├── CustomToast.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProductCard.jsx
│   ├── hooks/
│   │   ├── useApiCall.jsx
│   ├── Pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoAlexThomas/LMart.git
   cd lmart
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Features

- Modern React components using functional components and hooks
- Responsive design with Tailwind CSS
- Shopping cart functionality
- Product catalog display
- Toast notifications
- Header section with navigation
