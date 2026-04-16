import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  base: '/PersonalTrainer/'
})

//git add .
//git commit -m "message"
//git push 
//npm run deploygit 