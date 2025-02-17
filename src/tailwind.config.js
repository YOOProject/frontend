/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
          colors: {
           
            p1: "#2EF2FF",
            p3: "#C8EA80",
            s2: "#0C1838",
            Red: '#FB4141'
          },
        },
      },      
    plugins: [],
  };
  