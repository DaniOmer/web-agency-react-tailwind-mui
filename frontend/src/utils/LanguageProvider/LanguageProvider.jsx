import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

function LanguageProvider({ children }) {
  const resources = {
    en: {
      translation: {
        home: "Home",
        studio: "Studio",
        blog: "Blog",
        contact: "Contact Us",
        callToAction: "Let's do it",
        with: "With Lafia Studio",
        start: "Let's start a project together",
        collaborate:
          "Let's collaborate actively to craft an identity that embodies your personality, values, and ambitions.",
        email: "Email address",
        typeEmail: "Type your email address",
        started: "Get started",
        pendingProject: "Current projects",
        finishedProject: "Projects finished",
        brillantMind: "Brillant Minds Creating Ideas",
        recentClient: "Meet our recent client",
        clientReview: "Clients reviews",
        work: "Works",
        lastestWork: "Find our lastest works",
        awesomeProject: "The awesome projects that make all this possible.",
        websiteDesign: "Website design for e-commerce",
        websiteDesignDesc:
          "We build a unique design and fast website for small e-commerce company",
        readMore: "Read more",
        viewAll: "View all",
        logo: "Logo design",
        logoDesign:
          "Unlock Your brand's potential with our logo design expertise",
        uiDesign: "UI/UX Design",
        uiDesignDesc:
          "Elevate User experiences with our UI/UX design excellence",
        web: "Web development",
        webDesc:
          "Turning your vision into digital reality with our web development prowess",
        brand: "Brand identity",
        brandDesc:
          "Crafting your distinctive brand story through our brand identity expertise",
        seo: "SEO Optimization",
        seoDesc:
          "Boost your online visibility and dominate search results with our SEO optimization expertise",
        package: "Packaging design",
        packageDesc:
          "Enhance your product presentation with our innovative packaging designs",
        idea: "Everything begins with an idea.",
        terms: "TERMS",
        privacy: "PRIVACY",
        cookies: "COOKIES",
        ecommerce: "E-commerce design",
        theme: "Theme development",
        noCode: "No-code development",
        seoAnalysis: "SEO Analysis",
        seoStrategies: "SEO Strategies",
        seoKeyword: "Keyword Analysis",
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        studio: "Studio",
        blog: "Blog",
        contact: "Contact",
        callToAction: "Faisons-le ",
        with: "Avec Lafia Studio",
        start: "Commençons un projet ensemble",
        collaborate:
          "Collaborons activement pour créer une identité qui incarne votre personnalité, vos valeurs et vos ambitions.",
        email: "Votre adresse mail",
        typeEmail: "Veuillez saisir votre mail",
        started: "Commencez",
        pendingProject: "Projets en cours...",
        finishedProject: "Projects terminés",
        brillantMind: "Des esprits brillants créent des idées",
        recentClient: "Nos récents clients",
        clientReview: "Avis clients",
        work: "Réalisations",
        lastestWork: "Retrouvez nos récentes réalisations",
        awesomeProject:
          "Les projets incroyables qui rendent tout cela possible.",
        websiteDesign: "Site web pour l'e-commerce",
        websiteDesignDesc:
          "Nous concevons un design unique et un site web rapide pour une petite entreprise de commerce électronique.",
        readMore: "Plus",
        viewAll: "Voir plus",
        logo: "Conception de logo",
        logoDesign:
          "Débloquez le potentiel de votre marque avec notre expertise en conception de logo",
        uiDesign: "Conception UI/UX",
        uiDesignDesc:
          "Élevez les expériences utilisateur avec notre excellence en conception UI/UX",
        web: "Développement web",
        webDesc:
          "Transformez votre vision en réalité numérique avec notre expertise en développement web",
        brand: "Identité de marque",
        brandDesc:
          "Élaboration de l'histoire distinctive de votre marque grâce à notre expertise en identité de marque",
        seo: "Optimisation SEO",
        seoDesc:
          "Augmentez votre visibilité en ligne et dominez les résultats de recherche grâce à notre expertise en optimisation SEO",
        package: "Conception d'emballage",
        packageDesc:
          "Rehaussez la présentation de vos produits avec nos designs d'emballage innovants",
        idea: "Tout commence par une idée.",
        terms: "CONDITIONS",
        privacy: "VIE PRIVÉE",
        cookies: "COOKIES",
        ecommerce: "Conception e-commerce",
        theme: "Développement de thème",
        noCode: "Développement no-code",
        seoAnalysis: "Analyse SEO",
        seoStrategies: "Stratégies de référencement",
        seoKeyword: "Analyse de mots clés",
      },
    },
  };

  i18next.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: "en",
    debug: true,
    resources,
  });

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default LanguageProvider;
