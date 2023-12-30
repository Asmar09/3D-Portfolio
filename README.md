# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- create your account into [emailjs] (https://dashboard.emailjs.com/sign-in) for receiving messages to your email account 

- step by step [guide] (https://www.youtube.com/watch?v=wWiTouBHibs&ab_channel=WebWizard) that how to integrate emailjs and get keys for sending email messages to your account


- create a new file with .env name in root and add these Environment Variables to this file
VITE_APP_EMAILJS_SERVICE_ID="add emailJs service id"
VITE_APP_EMAILJS_TEMPLATE_ID="add emailJs template id"
VITE_APP_EMAILJS_PUBLIC_KEY="add emailJs public key"
VITE_APP_YOUR_NAME="add your name"
VITE_APP_YOUR_EMAIL="add your email"

- run "npm install"   into terminal for node_modules
- run "npm run dev" into terminal to run project into your local machine