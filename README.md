# React Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Vite. Showcases your work experience, projects, and contact information with interactive UI and smooth animations.

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Animated Spline Background:** Eye-catching 3D background using Spline.
- **Navigation:** Mobile-friendly sidebar and desktop navigation.
- **Work Experience:** Timeline of professional and educational experiences.
- **Projects Showcase:** Gallery of projects with images and links.
- **Contact Form:** Users can send messages directly from the site.
- **Social Links:** Quick access to your social profiles.

## Tech Stack

- [React](https://react.dev/) (v18)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Type Animation](https://www.npmjs.com/package/react-type-animation)
- [Spline](https://spline.design/) (3D background)
- [EmailJS](https://www.emailjs.com/) (for contact form, optional)

## Folder Structure

```
src/
  App.jsx                # Main app component
  main.jsx               # Entry point
  index.css              # Global styles (Tailwind)
  components/
    Sidenav.jsx          # Sidebar navigation
    Main.jsx             # Hero section with Spline
    Work.jsx             # Work experience timeline
    WorkItem.jsx         # Individual work item
    Project.jsx          # Projects gallery
    ProjectItem.jsx      # Individual project card
    Contact.jsx          # Contact form
images/                  # Project and profile images
public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Miraclepininee/react-personal-portfolio.git
   cd react-personal-portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```
The output will be in the `dist/` folder.

### Preview Production Build

```sh
npm run preview
```

## Deployment

This project is ready to deploy on [GitHub Pages](https://pages.github.com/) or any static hosting.

- **Deploy to GitHub Pages:**
  ```sh
  npm run deploy
  ```
  (Requires `gh-pages` package and repository setup.)

## Customization

- **Update your profile info:** Edit [`src/components/Main.jsx`](src/components/Main.jsx) and [`src/components/Work.jsx`](src/components/Work.jsx).
- **Add/Remove projects:** Edit [`src/components/Project.jsx`](src/components/Project.jsx) and [`src/components/ProjectItem.jsx`](src/components/ProjectItem.jsx).
- **Change images:** Replace files in [`images/`](images/) and update imports.
- **Configure contact form:** Integrate with EmailJS or another service in [`src/components/Contact.jsx`](src/components/Contact.jsx).

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to fork, customize, and use this portfolio for your own personal branding!