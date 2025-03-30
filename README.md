# Product Management

## 🚀 Overview
This is a *Product Management* application built with *React, TypeScript, Zustand, and Supabase*. It allows users to manage products by adding, editing, deleting, and filtering them with an elegant UI and smooth animations.

## 📌 Features
- 🛠 *Authentication* (Login & Logout with Supabase)
- 📦 *Product Management* (Create, Read, Update, Delete)
- 🔍 *Filters & Search* (Category, Price, Rating)
- 🌟 *Responsive Design* (Tailwind CSS, Lucide Icons)
- 🎨 *Smooth Animations*


## ⚡ Tech Stack
- *Frontend:* React, TypeScript, Zustand, Tailwind CSS
- *Backend:* Supabase (Auth & Database)
- *UI Components:* Lucide Icons, Framer Motion

## 📂 Folder Structure

📦 ProductManagement
├── 📂 src
│   ├── 📂 components      # Reusable UI components
│   ├── 📂 pages           # Page components (Landing, Products, Login)
│   ├── 📂 store           # Zustand state management
│   ├── 📂 lib             # Supabase configuration
│   ├── 📜 App.tsx         # Main application file
│   ├── 📜 main.tsx        # React entry point
│   ├── 📜 index.css       # Global styles
├── 📜 README.md           # Project documentation
├── 📜 package.json        # Dependencies and scripts
└── ...


## 🚀 Installation & Setup
1. *Clone the repository*
   sh
   git clone https://github.com/Apurwasharma3007/ProductManagement.git
   cd ProductManagement
   
2. *Install dependencies*
   sh
   npm install
   
3. *Set up Supabase*
   - Create a Supabase project
   - Copy the API keys & database URL into a .env file:
   sh
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   
4. *Run the app*
   sh
   npm run dev
   

## 📜 Environment Variables
Create a .env file in the root directory and add:
sh
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key


## 📌 Available Scripts
- npm run dev - Runs the development server
- npm run build - Builds the project for production
- npm run lint - Checks for linting issues

## 🤝 Contributing
1. *Fork the repo*
2. *Create a new branch* (feat/new-feature)
3. *Commit changes* (git commit -m "Added a new feature")
4. *Push changes* (git push origin feat/new-feature)
5. *Open a pull request* 🚀

## 📜 License
This project is licensed under the *MIT License*.

---
💡 *Feel free to star ⭐ this repo if you find it useful!*
