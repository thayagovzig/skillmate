/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "sans-serif"], 
        sora:["Sora", 'sans-serif']  
      }, 

      colors:{
        primary:{
          green:"#0dba4b", 
          lightgreen:"#27e36c"  
        }, 
        secondary:{
          green:"#cff1db"
        }, 
        dark:{ 
          green:"#054A1E" 
        }, 

        grey:"#101010" 
      }
    },
  },
  plugins: [],
}

