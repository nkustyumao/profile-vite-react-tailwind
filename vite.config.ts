import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/vite-react-project/",
=======
  base: "/profile-vite-react-tailwind/",
>>>>>>> 30fa546af1b49acde2f4f1a7abb7fecddcfc2147
  plugins: [react(), tailwindcss()],
})
