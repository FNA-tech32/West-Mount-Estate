# West Mount Estate 🏡✨

> **West Mount Estate** is a modern, luxury real estate and boutique hotel accommodation web platform designed for premier retreats, scenic villas, and 24/7 guest hospitality.

---

## 🌟 Overview

**West Mount Estate** delivers an intuitive, visually captivating digital experience for guests and travelers seeking exceptional stays. Featuring elegant architectural aesthetics, responsive design, interactive booking inquiries, and dedicated primary & alternative contact channels, the platform showcases luxury living at its finest.

---

## 🚀 Key Features

- **🏰 Luxury Brand Identity**: Unified branding under **West Mount Estate** across navigation, hero, facilities, about story, contact, and footer components.
- **🔍 Stay Discovery & Booking Filter**: Intuitive search interface to explore destination locations, check-in/out dates, and guest capacity.
- **🏡 Popular Estate Accommodations**: Showcases signature estate properties including *Evergreen Ridge Villa*, *The Resident Valley Suite*, and *Summit Grand Chalet* with real-time pricing and guest review ratings.
- **✨ Premium Facilities & Amenities**: Highlighted luxury amenities such as private workspaces, secure parking, curated dining, high-speed Wi-Fi, swimming pools, fitness centers, and 24/7 power backup.
- **📜 Our Legacy & Story**: Engaging About section detailing the vision, heritage, and serene surroundings of West Mount Estate.
- **💬 Parallax Testimonials Slider**: Interactive reviews powered by Swiper.js with parallax transitions.
- **🗺️ Interactive Map & Location Guide**: Embedded location map with instant travel directions and newsletter subscription.
- **📞 Full Contact & Alternative Details Hub**:
  - Direct display of **Primary Hotline** and **Alternative 24/7 Concierge Hotline**.
  - **Primary General Email** and **Alternative Support & Booking Email**.
  - **Main Estate Grounds** and **Alternative City Administrative Office**.
  - Interactive Contact Form with built-in validation (`react-hook-form`), including fields for **Primary Contact** and **Alternative Contact Detail** (secondary phone / alternate email).
- **🔐 Guest Portal**: Responsive Login and Member Registration flows with social authentication options.

---

## 📋 Contact & Alternative Details

| Channel | Primary Detail | Alternative Detail |
| :--- | :--- | :--- |
| **Phone** | `+1 (800) 456-7890` *(Front Desk)* | `+1 (800) 456-7899` *(24/7 Concierge)* |
| **Email** | `info@westmountestate.com` *(General Inquiries)* | `support@westmountestate.com` *(Reservations & Support)* |
| **Physical Location** | **Main Estate**: 742 Evergreen Valley Rd, Mountain View, CA 94043 | **Alternative Office**: Suite 400, Financial Plaza, San Francisco, CA 94111 |
| **Hours** | **Front Desk & Concierge**: 24/7 Full Support | **Administrative Office**: Mon–Sat, 8:00 AM – 8:00 PM EST |

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Tooling**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Carousels & Sliders**: [Swiper 11](https://swiperjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa`, `react-icons/bi`, `react-icons/md`)
- **Animation & UI Helpers**: [Framer Motion](https://www.framer.com/motion/) & [Material Tailwind](https://www.material-tailwind.com/)

---

## 📁 Project Structure

```text
West-Mount-Estate/
├── public/                     # Static media assets & images
│   ├── About.png               # About section imagery
│   ├── hero.png                # Hero section cover
│   ├── hotel-1.png             # Evergreen Ridge Villa
│   ├── hotel-2.png             # The Resident Valley Suite
│   ├── hotel3.png              # Summit Grand Chalet
│   ├── map.png                 # Map preview
│   └── testimonial.png         # Testimonials graphics
├── src/
│   ├── Components/             # Modular UI components
│   │   ├── About/              # Brand story & legacy
│   │   ├── Facilities/         # Resort amenities grid with contact link
│   │   ├── Footer/             # Brand footer, alternative details & links
│   │   ├── Hero/               # Hero banner & booking search
│   │   ├── Map/                # Location map & estate guide form
│   │   ├── Navbar/             # Header navigation & brand logo
│   │   ├── Popular/            # Featured luxury accommodations
│   │   ├── Testimonial/        # Swiper parallax testimonials
│   │   ├── AppLayout.jsx       # Global application layout shell
│   │   └── Rating.jsx          # Star rating component
│   ├── Pages/                  # Route view components
│   │   ├── Contact.jsx         # 24/7 Support, Primary & Alternative details form
│   │   ├── Home.jsx            # Main landing page
│   │   ├── Login.jsx           # Member login portal
│   │   └── Register.jsx        # Account registration
│   ├── App.css                 # Application styles
│   ├── App.jsx                 # Route provider & configuration
│   ├── index.css               # Tailwind directives & global utility rules
│   ├── main.jsx                # Application root mount
│   └── utils.css               # Utility styling classes
├── index.html                  # HTML entry point with West Mount Estate metadata
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind color themes & fonts
└── vite.config.js              # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/itsimran02/realState.git
   cd West-Mount-Estate
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be bundled into the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and bundles production-optimized HTML, CSS, and JavaScript into `dist/` |
| `npm run preview` | Starts a local server to preview the production build output |
| `npm run lint` | Runs ESLint to check for code quality and style compliance |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

&copy; 2026 **West Mount Estate**. All rights reserved.
