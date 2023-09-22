# Tailwind-setup-with-django
Simple demonstration that shows how to add tailwindcss with django project

Here is the details of the rules to add tailwind with django project:


# Django Setup

1. Create virtual Env using : python3 -m venv env (Linux), python -m venv env(Windows)
2. create django project: django-admin startproject core .
3. complete the settings part such as adding templates and fixed the static settings and also in your project urls.py settings
4. create a new app called "app" : python3 manage.py startapp app
5. create urls.py in your app directory and write a views into your views.py and create a template name called "home.html". for details just clone this project and overview this.


# Tailwind Setting:

npm install -D tailwindcss
npx tailwindcss init

# tailwind.config.js 

copy this file into your config file!

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
  // './home.html',

],

  theme: {
    extend: {
      spacing: {
        'some key': {
          1.5: '<something>',
        },
    },
  },
  plugins: [],
}
}


# package.json

{
  "devDependencies": {
    "tailwindcss": "^3.3.3"
  },

  "scripts":{

    "build": "tailwindcss -i ./static/tw/input.css -o ./static/tw/output.css --watch"

  }

  
}

# input.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# Finally
npm run build

