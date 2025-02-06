# Gutenberg Front
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13.x-lightblue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-pink)](https://tailwindcss.com/)


![image](https://github.com/user-attachments/assets/bc73f55e-5dd1-4c60-808f-3d821bbc5313)

A modern front-end application built with React, TypeScript, Next.js, Tailwind CSS, and Context API.

---

## 📦 Tech Stack

- **Framework**: Next.js (React framework for production)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: Next.js routing
- **Deployment**: Vercel (or any preferred hosting)
- **Build Tool**: Next.js

---

## ⚙️ Installation & Running

### Clone the repository:

```bash
git clone [https://github.com/caetanojpo/gutenberg-front.git](https://github.com/caetanojpo/gutenberg-front.git)
```

### Access folder:

``` bash
cd gutenberg-front
```
### Install dependencies:

``` bash
npm install
```

### Run the application:

```bash
`npm run dev`
```

The application will be available at `http://localhost:3000`.

---

## 🔧 Configuration

Create a `.env.local` file to configure any environment variables for your application. Here is an example template:

```bash
NEXT_PUBLIC_DEV_URL="http://localhost:8000"
NEXT_PUBLIC_PROD_URL="https://gutenberg-api-uwq7.onrender.com"
```
---

## 🎨 Figma Prototype

The UI of this application has been designed in Figma. You can view the prototype here: [View Figma Prototype](https://www.figma.com/design/vCCCxbeKR5dea00s4s9kux/Litalyze?node-id=0-1&t=BI72zyCU7Pii4Vc6-1)

The design includes all screens and user flows for reference, ensuring that the implemented front-end adheres to the visual and functional specifications.

---

## 📚 Pages & Routes

The application has the following pages:

### 1. Login

- **URL**: `/`
- The landing page of the application with login to authenticate on the server.

### 2. Dashboard

- **URL**: `/dashboard`
- The user's main dashboard that provides insights and actions based on the application data.

---

🧱 **Atomic Design in This Project**

In this project, we've adopted the Atomic Design methodology to build a scalable and maintainable UI. The components are structured into five levels:

- **Atoms**: Basic building blocks like buttons, inputs, and icons are designed as reusable components.
- **Molecules**: Combinations of atoms, like form groups or card components, that are more complex yet still reusable.
- **Organisms**: Combinations of molecules forming more complex UI structures, such as headers or product lists.
- **Templates**: Page layouts formed by organisms, defining the structure without specific content.
- **Pages**: Final instances of templates, populated with real content, ready for display.

This approach ensures modularity, reusability, and consistency across the UI, making the project easy to scale and maintain.

---

## 🚀 Deployment

Deployed on Vercel. Ensure that environment variables are correctly set in the Vercel dashboard for seamless deployment.

``` bash
`NEXT_PUBLIC_API_URL=https://your-api-url.com NEXT_PUBLIC_FEATURE_TOGGLE=true`
```

---

## 📹 Loom Walkthrough
[![Watch the video](https://cdn.loom.com/sessions/thumbnails/be3d68bd767d425383c14432fe5a6b68-5718dcf1fc453478-full-play.gif)](https://www.loom.com/share/be3d68bd767d425383c14432fe5a6b68))

---

## 📒 **Architecture Notes**:

- **Context API**: For global state management and avoiding prop drilling.
- **Tailwind CSS**: For utility-first styling, making it easy to adjust layout and appearance without writing custom CSS.
- **Next.js**: Offers file-based routing, SSR (server-side rendering), and automatic code splitting to optimize the app's performance.
- **TypeScript**: Ensures type safety throughout the application for better developer experience and fewer runtime errors.
- **Figma Design**: Provides a clear visual and interactive prototype, ensuring the UI meets user expectations and business requirements.
