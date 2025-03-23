# Kirana

## Introduction
Kirana is a **Vue.js + Vite** modular architecture framework designed for building scalable and maintainable frontend applications. By integrating **Tailwind CSS**, Kirana provides a modern, efficient, and flexible development experience.

## Purpose
The goal of Kirana is to establish a **modular frontend structure** that enhances code organization, making it easier to manage large-scale applications. This modular approach ensures that different features or services within an application remain well-structured and independent, promoting better maintainability and scalability.

## Key Features
- **Vue.js 3**: A progressive JavaScript framework for building user interfaces.
- **Vite**: A lightning-fast frontend tooling for rapid development and optimized builds.
- **Tailwind CSS**: A utility-first CSS framework for styling with ease.
- **Modular Architecture**: Clean folder structure to efficiently organize application features.
- **Scalability & Maintainability**: Designed to support large applications with reusable modules.
- **Performance Optimized**: Uses Vite's blazing-fast build process for better performance.

## Folder Structure
```
Kirana/
├── public/                 # Static assets
├── src/
│   ├── modules/            # Feature-based modules
│   │   ├── Acme/           # Example module
│   │   ├── Shared/         # Shared components and utilities
│   ├── router/             # Application routing
│   ├── store/              # State management
│   │   ├── index.js/       # Register your module => important
│   ├── views/              # Global views
│   ├── App.vue             # Root component
│   ├── main.js             # Entry point
│   ├── register-route.js   # Register your route => important
├── index.html              # Main HTML file
├── package.json            # Project dependencies
├── tailwind.config.cjs     # Tailwind configuration
├── vite.config.js          # Vite configuration
```
### Folder Structure Example

#### Users Module
```
modules/
├── Users/
│   ├── views/
│   │   ├── UserList.vue      # List of users
│   │   ├── UserProfile.vue   # User profile page
│   ├── store/
│   │   ├── users.js          # Vuex store for users
│   ├── router.js             # Routes related to users
│   ├── index.js              # Entry point for this module
```

#### Payments Module
```
modules/
├── Payments/
│   ├── views/
│   │   ├── Checkout.vue      # Payment checkout page
│   │   ├── PaymentHistory.vue # User's payment history
│   ├── store/
│   │   ├── payments.js       # Vuex store for payments
│   ├── router.js             # Routes related to payments
│   ├── index.js              # Entry point for this module

```

## Getting Started
### Installation
```sh
npm install
```
Or if using yarn:
```sh
yarn install
```

### Running the Development Server
```sh
npm run dev
```

### Building for Production
```sh
npm run build
```

## Contribution
If you want to contribute to **Kirana**, feel free to fork the repository and submit a pull request. Suggestions and improvements are always welcome!

## License
Kirana is open-source and licensed under [MIT License](LICENSE).

