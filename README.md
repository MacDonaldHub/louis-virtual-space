# MacDonald Louis | Virtual Assistant Website

A modern, responsive website for a Virtual Assistant (VA) business, showcasing services, experience, and a simple way for clients to get in touch.

**Live site:** (https://lovable.dev/projects/ca82d60c-4817-4509-859e-2e577782e7ea)

---

## About the Project

This website presents MacDonald Louis as a professional virtual assistant, covering services such as administrative support, email and calendar management, customer support, data entry, and research. It is designed to be clean, fast, and easy for potential clients to navigate on any device.

## How It Was Built

This project was built through a collaboration between hand-written code and AI-assisted design:

1. **Code drafted by MacDonald in VS Code.** The initial codebase, including the project structure, core components, and page logic, was written by MacDonald using the Visual Studio Code app.
2. **Lovable picked it up from the prompts.** The drafted code and the prompts provided were then taken into [Lovable](https://lovable.dev), which understood the direction and intent behind them.
3. **Lovable completed the design.** Based on those prompts, Lovable built out the remaining UI and finalised the design of the VA website, including layout, styling, and responsiveness.
4. **Synced through GitHub.** The repository stays connected, so changes made in VS Code and in Lovable are kept in one place.

| Stage | Who / What | Role |
|-------|------------|------|
| Initial code | MacDonald (VS Code) | Drafted the codebase and structure |
| Prompts | MacDonald | Gave direction on look, feel, and content |
| Design completion | Lovable | Interpreted the prompts and completed the website design |
| Version control | GitHub | Stores and syncs the project |

## Features

- Responsive layout for mobile, tablet, and desktop
- Hero section introducing the VA and the value they offer
- Services overview
- About section
- Testimonials / portfolio *(edit as needed)*
- Contact section for client enquiries
- Clean, modern design completed by Lovable

## Tech Stack

> Update this list to match your project's `package.json`.

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Built and designed with Lovable
- Code drafted in Visual Studio Code

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Move into the project folder
cd <your-repo-name>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Project Structure

> Adjust to match your actual folders.


  "name": "tanstack_start_ts",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "overrides": {
    "rolldown": "1.2.1"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.101.1",
    "@tanstack/react-router": "1.170.41",
    "@tanstack/react-start": "1.168.60",
    "@tanstack/router-plugin": "1.168.42",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "2.26.5",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "nitro": "3.0.260603-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "8.1.5",
    "vitest": "^4.1.10"
  }
}


## Deployment

The site can be published directly from Lovable, or deployed from this repository to any static host such as Vercel or Netlify.

## Credits

- **Code drafted by:** MacDonald, using Visual Studio Code
- **Design completed by:** [Lovable](https://lovable.dev), from the prompts provided
- **Client / VA:** [louis-virtual-space]

## Contact

For questions or collaboration:

- **Name:** MacDonald
- **Email:** [macmarylouis@gmail.com]
- **GitHub:** (https://github.com/MacDonaldHub)

## License

This project is licensed under the [MIT License](LICENSE). *(Change this if you use a different license.)*
