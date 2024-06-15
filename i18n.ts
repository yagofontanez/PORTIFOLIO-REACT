import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Trocar Linguagem": "Change Language",
      "Trocar Wallpaper": "Change Wallpaper",
      "Selecione o Wallpaper": "Select the Wallpaper",
      "Previsão do Tempo": "Weather forecast",
      "Calculadora IMC": "BMI Calculator",
      "Listagem por API": "Listing by API",
      "Landing Page": "Landing Page",
      "Cursando Sistemas de Informação / ADS": "Studying Information Systems / Analysis and Systems Development",
      "Duração: 3 anos - 6 semestres": "Duration: 3 Years - 6 Semesters",
      "Ver Matérias": "See Articles",
      "Desenvolvedor FullStack Web": "Web FullStack Developer",
      "TDP Sistemas": "TDP Sistemas",
      "02/2024 até dias atuais": "2024/02 Until present day",
      "Atuo como desenvolvedor fullstack web, criando e alterando sistemas de gestão para empresas. Linguagens utilizadas: React, TypeScript, JavaScript, NodeJS.": "I work as a full stack web developer, creating and changing management systems for companies. Languages ​​used: React, TypeScript, JavaScript, NodeJS.",
      "Currículo": "CV",
      "Por favor, inicie sua": "Please, log in",
      "Por favor, digite um nome de usuário.": "Please enter a username.",
      "Bem vindo(a)": "Welcome",
    }
  },
  pt: {
    translation: {
      "Trocar Linguagem": "Trocar Linguagem",
      "Trocar Wallpaper": "Trocar Wallpaper",
      "Selecione o Wallpaper": "Selecione o Wallpaper",
      "Previsão do Tempo": "Previsão do Tempo",
      "Calculadora IMC": "Calculadora IMC",
      "Listagem por API": "Listagem por API",
      "Landing Page": "Landing Page",
      "Cursando Sistemas de Informação / ADS": "Cursando Sistemas de Informação / ADS",
      "Duração: 3 anos - 6 semestres": "Duração: 3 anos - 6 semestres",
      "Ver Matérias": "Ver Matérias",
      "Desenvolvedor FullStack Web": "Desenvolvedor FullStack Web",
      "TDP Sistemas": "TDP Sistemas",
      "02/2024 até dias atuais": "02/2024 até dias atuais",
      "Atuo como desenvolvedor fullstack web, criando e alterando sistemas de gestão para empresas. Linguagens utilizadas: React, TypeScript, JavaScript, NodeJS.": "Atuo como desenvolvedor fullstack web, criando e alterando sistemas de gestão para empresas. Linguagens utilizadas: React, TypeScript, JavaScript, NodeJS.",
      "Currículo": "Currículo",
      "Por favor, inicie sua sessão": "Por favor, inicie sua",
      "Por favor, digite um nome de usuário.": "Por favor, digite um nome de usuário.",
      "Bem vindo(a)": "Bem vindo(a)",
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', 
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;