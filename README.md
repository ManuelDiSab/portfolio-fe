# 🚀 Manuel Di Sabatino - Personal Web Portfolio

Welcome to my personal portfolio repository! This project serves as a showcase of my skills, projects, and educational background as a Full-stack Developer. It is built using modern web technologies, prioritizing clean architecture, responsive design, and smooth user experience.

## ✨ Features

- **Responsive & Modern Design**: Fully responsive layout tailored for mobile, tablet, and desktop viewports.
- **Glassmorphism & Micro-animations**: A premium feel using blur effects, CSS variables, and subtle CSS animations.
- **Theme Ready**: Global SCSS variables setup to support easily switching between Dark and Light modes.
- **Component-Based Architecture**: Developed with Angular, following best practices for modularity (separating components, pages, services, and interfaces).
- **Interactive UI Elements**: Modals for certificates, offcanvas menus for mobile navigation, and typing effects.

## 🛠️ Tech Stack

- **Framework**: [Angular 19](https://angular.dev/)
- **Styling**: SCSS / CSS Global Variables
- **UI Toolkit**: Bootstrap / ng-bootstrap (for offcanvas and modals)
- **Icons**: FontAwesome / Custom SVGs

## 📂 Project Structure

The codebase is organized to maintain scalability and readability:

```
src/app/
├── _componenti/     # Reusable UI components (e.g., Navbar/Menu)
├── _pagine/         # Main views (e.g., Homepage sections: About, Skills, Projects, Education)
├── _servizi/        # Angular services for state management and API calls
├── _interfacce/     # TypeScript interfaces defining data models
├── _direttiva/      # Custom Angular directives
└── app.routes.ts    # Application routing module
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and Angular CLI installed.
```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ManuelDiSab/portfolio-fe.git
   ```
2. Navigate to the project directory
   ```bash
   cd portfolio-fe
   ```
3. Install NPM packages
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/`

## 👨‍💻 About Me

Hi! I'm Manuel, a young Full-stack Developer focused on modern and scalable solutions. I am creative, passionate about technology, naturally curious, and detail-oriented. I'm constantly seeking new solutions and trying to improve myself continuously.

Feel free to reach out to me or explore my live projects!

## 📄 License

This project is open-source and available under the MIT License.
