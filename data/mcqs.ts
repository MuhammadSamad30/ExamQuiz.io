// /data/mcqs.ts
export const mcqs = [
  {
    question: "What is Next.js?",
    options: [
      "A backend framework",
      "A full-stack framework",
      "A frontend framework",
      "A database",
    ],
    answer: "A full-stack framework",
  },
  {
    question: "What is the default routing system in Next.js based on?",
    options: [
      "API routing",
      "File-based routing",
      "Database-based routing",
      "Config-based routing",
    ],
    answer: "File-based routing",
  },
  {
    question:
      "Which directory in Next.js is used for creating server-side rendered routes by default?",
    options: ["pages/", "components/", "api/", "app/"],
    answer: "pages/",
  },
  {
    question:
      "What file extension is recommended for TypeScript files in Next.js?",
    options: [".js", ".jsx", ".ts", ".tsx"],
    answer: ".tsx",
  },
  {
    question: "What is the purpose of the /app directory in Next.js?",
    options: [
      "To store configuration files",
      "To handle dynamic routing",
      "To enable the App Router for server-side components",
      "To store utility functions",
    ],
    answer: "To enable the App Router for server-side components",
  },
  {
    question: "How do you define a dynamic route in the /app directory?",
    options: [
      "By creating a file with [param].tsx",
      "By configuring a JSON file",
      "By setting environment variables",
      "By using the routes.json file",
    ],
    answer: "By creating a file with [param].tsx",
  },
  {
    question: "What is Sanity CMS used for in a Next.js project?",
    options: [
      "User authentication",
      "Handling payments",
      "Content management",
      "Database operations",
    ],
    answer: "Content management",
  },
  {
    question: "Which package is used to integrate Sanity CMS with Next.js?",
    options: ["@sanity/client", "sanity-next", "@next/sanity", "next-client"],
    answer: "@sanity/client",
  },
  {
    question: "What is Clerk used for in a Next.js project?",
    options: [
      "State management",
      "User authentication",
      "Payment processing",
      "Static site generation",
    ],
    answer: "User authentication",
  },
  {
    question:
      "Which method is recommended for fetching server-side data in the /app directory?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "fetch() in server components",
      "useEffect hook",
    ],
    answer: "fetch() in server components",
  },
  {
    question: "How do you secure API routes in Next.js using Clerk?",
    options: [
      "Using middleware from Clerk",
      "Setting environment variables",
      "Disabling CORS",
      "Configuring the pages directory",
    ],
    answer: "Using middleware from Clerk",
  },
  {
    question: "What is the main purpose of Stripe in a Next.js application?",
    options: [
      "Data storage",
      "Payment processing",
      "Routing management",
      "State management",
    ],
    answer: "Payment processing",
  },
  {
    question:
      "Which package is commonly used to integrate Stripe with Next.js?",
    options: [
      "@stripe/next",
      "stripe-client",
      "@stripe/stripe-js",
      "next-stripe",
    ],
    answer: "@stripe/stripe-js",
  },
  {
    question:
      "Which hook is commonly used to manage client-side data fetching in Next.js?",
    options: ["useState", "useEffect", "useRouter", "useFetch"],
    answer: "useEffect",
  },
  {
    question: "How do you define a server-side dynamic route in Next.js?",
    options: [
      "By setting up a file in the api/ directory",
      "By creating a page in the pages/ directory",
      "By configuring environment variables",
      "By adding a dynamic file in the app/ directory",
    ],
    answer: "By creating a page in the pages/ directory",
  },
  {
    question: "What is the purpose of middleware in Next.js?",
    options: [
      "To handle client-side navigation",
      "To transform requests and responses",
      "To store user sessions",
      "To configure environment variables",
    ],
    answer: "To transform requests and responses",
  },
  {
    question: "How do you create a protected route using Clerk in Next.js?",
    options: [
      "By wrapping components with ClerkProvider",
      "By disabling server-side rendering",
      "By setting useEffect hooks",
      "By configuring environment variables",
    ],
    answer: "Using middleware from Clerk",
  },
  {
    question: "What are server components in Next.js?",
    options: [
      "Components that only run on the client side",
      "Components that execute server-side code and return HTML",
      "Static components rendered during build",
      "Components that handle authentication",
    ],
    answer: "Components that execute server-side code and return HTML",
  },
  {
    question: "How can you handle form validation in a Next.js application?",
    options: [
      "Using the FormData API",
      "By using third-party libraries like Formik or React Hook Form",
      "By disabling inputs",
      "By creating custom hooks",
    ],
    answer: "By using third-party libraries like Formik or React Hook Form",
  },
  {
    question:
      "How do you enable ISR (Incremental Static Regeneration) in Next.js?",
    options: [
      "Using getServerSideProps",
      "Using getStaticProps with revalidate",
      "Using fetch",
      "By setting environment variables",
    ],
    answer: "Using getStaticProps with revalidate",
  },
  {
    question:
      "What method is used to handle payments with Stripe on the client side?",
    options: [
      "initializePayment",
      "createPaymentIntent",
      "loadStripe",
      "payWithStripe",
    ],
    answer: "loadStripe",
  },
  {
    question: "How do you optimize images in a Next.js application?",
    options: [
      "By importing and using the Image component from next/image",
      "By setting the optimizeImages flag in next.config.js",
      "By using external libraries",
      "By setting up a custom image server",
    ],
    answer: "By importing and using the Image component from next/image",
  },
  {
    question:
      "What command do you use to create a new Next.js project with TypeScript?",
    options: [
      "npx create-next-app@latest --typescript",
      "npm init next-app",
      "yarn next new",
      "create-next-ts",
    ],
    answer: "npx create-next-app@latest --typescript",
  },
  {
    question:
      "Which hook allows you to programmatically navigate between routes in Next.js?",
    options: ["useEffect", "useState", "useRouter", "useNavigation"],
    answer: "useRouter",
  },
  {
    question:
      "What function is used to process server-side requests in the api/ directory of a Next.js project?",
    options: [
      "apiHandler",
      "requestHandler",
      "handler",
      "Default export function",
    ],
    answer: "Default export function",
  },
  {
    question: "What is the default port for a Next.js development server?",
    options: ["3000", "8080", "4000", "5000"],
    answer: "3000",
  },
  {
    question:
      "Which Next.js feature allows you to generate static pages at build time?",
    options: ["ISR", "SSG", "SSR", "CSR"],
    answer: "SSG",
  },
  {
    question: "How do you deploy a Next.js app on Vercel?",
    options: [
      "By uploading a zip file",
      "Using Docker",
      "Connecting your Git repository to Vercel",
      "By configuring environment variables manually",
    ],
    answer: "Connecting your Git repository to Vercel",
  },
  {
    question: "What does the next.config.js file do?",
    options: [
      "Configures image optimizations",
      "Sets environment variables",
      "Defines build and runtime configurations",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is getServerSideProps used for?",
    options: [
      "Fetching data during build",
      "Fetching data on the server for every request",
      "Fetching client-side data",
      "Defining client routes",
    ],
    answer: "Fetching data on the server for every request",
  },
  {
    question: "Which statement best describes SSR?",
    options: [
      "Rendering pages during the build process",
      "Rendering pages on the server for each request",
      "Rendering only client components",
      "Rendering images only",
    ],
    answer: "Rendering pages on the server for each request",
  },
  {
    question: "What is the command to build a Next.js project for production?",
    options: ["npm run dev", "npm run build", "yarn start", "next prepare"],
    answer: "npm run build",
  },
  {
    question: "What does ISR stand for in Next.js?",
    options: [
      "Incremental Site Rendering",
      "Instant Site Refresh",
      "Incremental Static Regeneration",
      "Immediate Server Request",
    ],
    answer: "Incremental Static Regeneration",
  },
  {
    question:
      "Which of the following methods are used for data fetching in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "How can you protect environment variables in a Next.js application?",
    options: [
      "By using a custom hook",
      "By placing them in a .env.local file",
      "By hardcoding them in the code",
      "By disabling APIs",
    ],
    answer: "By placing them in a .env.local file",
  },
  {
    question: "What component is used for navigation in Next.js?",
    options: ["Anchor tag", "Router", "Link", "Nav"],
    answer: "Link",
  },
  {
    question: "Which of the following best describes API Routes in Next.js?",
    options: [
      "Routes that handle image optimization",
      "Routes for client-side requests",
      "Serverless functions as API endpoints",
      "Static routes",
    ],
    answer: "Serverless functions as API endpoints",
  },
  {
    question: "What is the purpose of React's useState hook in Next.js?",
    options: [
      "To fetch server data",
      "To handle state in functional components",
      "To create dynamic routes",
      "To optimize images",
    ],
    answer: "To handle state in functional components",
  },
  {
    question: "How can you dynamically import components in Next.js?",
    options: [
      "Using dynamic() from next/dynamic",
      "Using require()",
      "By hardcoding components",
      "Through .env variables",
    ],
    answer: "Using dynamic() from next/dynamic",
  },
  {
    question: "What is the default folder for API routes in Next.js?",
    options: ["pages", "app", "api", "lib"],
    answer: "api",
  },
  {
    question: "What type of content does the getStaticPaths function handle?",
    options: [
      "Dynamic paths for SSG",
      "Static imports",
      "Environment variables",
      "API routes only",
    ],
    answer: "Dynamic paths for SSG",
  },
  {
    question: "How can you enable custom 404 pages in Next.js?",
    options: [
      "Create 404.js in the pages directory",
      "Set a flag in next.config.js",
      "Use a custom API route",
      "By configuring middleware",
    ],
    answer: "Create 404.js in the pages directory",
  },
  {
    question: "What does the _app.tsx file handle in Next.js?",
    options: [
      "Error handling",
      "Global configuration and layout",
      "API routes",
      "Page optimization",
    ],
    answer: "Global configuration and layout",
  },
  {
    question:
      "Which of the following is a key feature of Clerk for Next.js applications?",
    options: [
      "User session management",
      "Dynamic payment options",
      "Serverless image optimization",
      "Middleware optimization",
    ],
    answer: "User session management",
  },
  {
    question: "What is the purpose of @sanity/client in a Next.js app?",
    options: [
      "Handle content queries",
      "Configure payment processing",
      "State management",
      "Environment variable setup",
    ],
    answer: "Handle content queries",
  },
  // Additional 50 MCQs to complete 100 questions
  {
    question: "What does the next/dynamic module help with?",
    options: [
      "Server-side rendering",
      "Dynamic imports for components",
      "Static site generation",
      "API routes",
    ],
    answer: "Dynamic imports for components",
  },
  {
    question:
      "Which of the following is a benefit of using TypeScript with Next.js?",
    options: [
      "Enhanced type safety",
      "No compilation errors",
      "Increased runtime performance",
      "None of the above",
    ],
    answer: "Enhanced type safety",
  },
  {
    question: "How can you define API routes in the /pages/api directory?",
    options: [
      "As Express.js routes",
      "As serverless functions",
      "As middleware",
      "As static files",
    ],
    answer: "As serverless functions",
  },
  {
    question:
      "Which feature of Next.js allows you to build SEO-friendly web pages?",
    options: ["CSR", "SSR", "None", "Only static generation"],
    answer: "SSR",
  },
  {
    question:
      "What is the advantage of Incremental Static Regeneration (ISR) in Next.js?",
    options: [
      "Instant page updates",
      "Static pages never update",
      "Pages can be updated after deployment",
      "No build time",
    ],
    answer: "Pages can be updated after deployment",
  },
  {
    question: "Which file in a Next.js project configures global CSS imports?",
    options: ["_app.tsx", "index.tsx", "next.config.js", "package.json"],
    answer: "_app.tsx",
  },
  {
    question: "What is one benefit of using Sanity CMS with Next.js?",
    options: [
      "Built-in authentication",
      "Real-time content updates",
      "Server-side rendering",
      "Stripe integration",
    ],
    answer: "Real-time content updates",
  },
  {
    question: "Which command is used to start a Next.js development server?",
    options: ["npm run start", "npm run dev", "npm run build", "npm run serve"],
    answer: "npm run dev",
  },
  {
    question: "How do you perform client-side navigation in Next.js?",
    options: [
      "Using next/router",
      "Using window.location",
      "Using Link component",
      "Both A and C",
    ],
    answer: "Both A and C",
  },
  {
    question:
      "Which of the following is true about Next.js serverless functions?",
    options: [
      "They require a dedicated server",
      "They are executed in a serverless environment",
      "They are only used for static generation",
      "None of the above",
    ],
    answer: "They are executed in a serverless environment",
  },
  {
    question: "What is Clerk's main benefit in Next.js?",
    options: [
      "Payment processing",
      "Authentication and user management",
      "SEO optimization",
      "Image optimization",
    ],
    answer: "Authentication and user management",
  },
  {
    question:
      "What is the recommended approach to fetch data in server components of Next.js?",
    options: [
      "Using useEffect",
      "Using fetch",
      "Using SWR",
      "Using getStaticProps",
    ],
    answer: "Using fetch",
  },
  {
    question:
      "Which tool can you use to preview content from Sanity CMS in your Next.js application?",
    options: ["Next.js Preview Mode", "Sanity Studio", "Clerk", "Stripe"],
    answer: "Sanity Studio",
  },
  {
    question: "How do you handle environment variables securely in Next.js?",
    options: [
      "Using .env file",
      "Hardcoding in code",
      "Using Clerk",
      "Using Stripe",
    ],
    answer: "Using .env file",
  },
  {
    question:
      "Which feature of Next.js enables you to handle both client and server logic in the same project?",
    options: [
      "Monolithic architecture",
      "Full-stack framework",
      "API routes",
      "None of the above",
    ],
    answer: "Full-stack framework",
  },
  {
    question:
      "How can you optimize performance for a Next.js page with heavy images?",
    options: [
      "Using next/image",
      "Using plain img tags",
      "Using CSS background images",
      "None of the above",
    ],
    answer: "Using next/image",
  },
  {
    question: "What is one benefit of using TypeScript in a Next.js project?",
    options: [
      "Automatic code optimization",
      "Static type checking",
      "Faster rendering",
      "Better SEO",
    ],
    answer: "Static type checking",
  },
  {
    question: "How do you add global CSS styles in a Next.js application?",
    options: [
      "Import in _app.tsx",
      "Link in _document.tsx",
      "Add in next.config.js",
      "Import in index.tsx",
    ],
    answer: "Import in _app.tsx",
  },
  {
    question:
      "Which feature of Next.js allows hot reloading during development?",
    options: ["Fast Refresh", "Hot Module Replacement", "SSR", "Both A and B"],
    answer: "Both A and B",
  },
  {
    question:
      "What is the purpose of the _document.tsx file in a Next.js project?",
    options: [
      "To initialize global state",
      "To customize the HTML document structure",
      "To define API endpoints",
      "To import global CSS",
    ],
    answer: "To customize the HTML document structure",
  },
  {
    question: "Which of the following is true about Next.js pages?",
    options: [
      "They support both SSR and SSG",
      "They only support SSR",
      "They only support SSG",
      "They only support CSR",
    ],
    answer: "They support both SSR and SSG",
  },
  {
    question:
      "How do you implement fallback behavior for dynamic routes in Next.js?",
    options: [
      "Using getServerSideProps",
      "Using getStaticPaths with fallback",
      "Using SWR",
      "Using API routes",
    ],
    answer: "Using getStaticPaths with fallback",
  },
  {
    question: "What does the term 'hydration' refer to in Next.js?",
    options: [
      "Compiling TypeScript",
      "Loading CSS",
      "Attaching event listeners to static HTML",
      "Optimizing images",
    ],
    answer: "Attaching event listeners to static HTML",
  },
  {
    question:
      "Which of the following best describes the concept of 'serverless' in Next.js?",
    options: [
      "Running a full server",
      "Using serverless functions",
      "Client-side rendering",
      "Static site generation",
    ],
    answer: "Using serverless functions",
  },
  {
    question:
      "How do you add TypeScript support to an existing Next.js project?",
    options: [
      "Rename files to .ts/.tsx",
      "Install TypeScript and create tsconfig.json",
      "Add types to package.json",
      "Both A and B",
    ],
    answer: "Both A and B",
  },
  {
    question: "Which hook is used to access route parameters in Next.js?",
    options: ["useEffect", "useParams", "useRouter", "useRoute"],
    answer: "useRouter",
  },
  {
    question:
      "What is a primary benefit of using Next.js for server-side rendering?",
    options: [
      "Improved SEO",
      "Better client-side interactivity",
      "Simplified state management",
      "Faster development server startup",
    ],
    answer: "Improved SEO",
  },
  {
    question: "What role does the next/head component play in a Next.js page?",
    options: [
      "Sets metadata and head elements",
      "Fetches data",
      "Handles routing",
      "Optimizes images",
    ],
    answer: "Sets metadata and head elements",
  },
  {
    question:
      "How can you update content on a Next.js page without a full rebuild?",
    options: ["Using ISR", "Using SSR", "Using SSG", "Using CSR"],
    answer: "Using ISR",
  },
  {
    question:
      "Which of the following can be integrated with Next.js for handling payments?",
    options: ["PayPal", "Stripe", "Square", "All of the above"],
    answer: "Stripe",
  },
  {
    question: "How do you verify user sessions in Clerk with Next.js?",
    options: [
      "Using Clerk middleware",
      "Using getServerSideProps",
      "Using API routes",
      "Using next/dynamic",
    ],
    answer: "Using Clerk middleware",
  },
  {
    question:
      "Which of the following can be used to enhance performance by caching data in Next.js?",
    options: ["SWR", "useEffect", "useState", "getStaticProps"],
    answer: "SWR",
  },
  {
    question: "What is the purpose of the next export command?",
    options: [
      "To run the development server",
      "To export a static version of the site",
      "To deploy on Vercel",
      "To build serverless functions",
    ],
    answer: "To export a static version of the site",
  },
  {
    question: "How do you handle client-side state in a Next.js application?",
    options: [
      "Using useState",
      "Using Redux",
      "Using Context API",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Which of the following features is supported by Next.js for SEO optimization?",
    options: [
      "Server-side rendering",
      "Dynamic meta tags",
      "Custom head management",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the main advantage of using getStaticProps in Next.js?",
    options: [
      "Real-time data",
      "Improved performance by pre-rendering",
      "Server-side only rendering",
      "Client-side only rendering",
    ],
    answer: "Improved performance by pre-rendering",
  },
  {
    question: "How does Next.js handle code splitting?",
    options: [
      "Automatically",
      "Manually",
      "By using dynamic imports only",
      "By splitting CSS files",
    ],
    answer: "Automatically",
  },
  {
    question: "What type of routing does Next.js use by default?",
    options: [
      "File-based routing",
      "Config-based routing",
      "Dynamic routing",
      "None",
    ],
    answer: "File-based routing",
  },
  {
    question:
      "Which of the following best describes getInitialProps in Next.js?",
    options: [
      "A legacy data fetching method",
      "The recommended approach for SSR",
      "A method for static generation",
      "A client-side hook",
    ],
    answer: "A legacy data fetching method",
  },
  {
    question: "What does the next/script component help with?",
    options: [
      "Managing script loading strategies",
      "Fetching API data",
      "Styling components",
      "Routing",
    ],
    answer: "Managing script loading strategies",
  },
  {
    question:
      "How can you include third-party libraries that require the window object in a Next.js project?",
    options: [
      "Using dynamic imports with SSR disabled",
      "Using next/head",
      "Using getStaticProps",
      "Using useEffect",
    ],
    answer: "Using dynamic imports with SSR disabled",
  },
  {
    question:
      "Which of the following allows Next.js to serve multiple locales?",
    options: [
      "Internationalized Routing",
      "API routes",
      "Dynamic imports",
      "Serverless functions",
    ],
    answer: "Internationalized Routing",
  },
  {
    question: "What is a common use case for using the next/image component?",
    options: [
      "Lazy loading images",
      "Dynamic routing",
      "Server-side data fetching",
      "Authentication",
    ],
    answer: "Lazy loading images",
  },
  {
    question:
      "How can you implement error boundaries in a Next.js application?",
    options: [
      "Using componentDidCatch in class components",
      "Using getServerSideProps",
      "Using dynamic imports",
      "Using next/head",
    ],
    answer: "Using componentDidCatch in class components",
  },
  {
    question: "Which of the following is true about Next.js middleware?",
    options: [
      "It can modify the response",
      "It can only run on the client side",
      "It is used for state management",
      "It cannot access cookies",
    ],
    answer: "It can modify the response",
  },
  {
    question:
      "What is the role of the next.config.js file regarding image domains?",
    options: [
      "Specifying allowed external image domains",
      "Defining API routes",
      "Setting global CSS",
      "Configuring serverless functions",
    ],
    answer: "Specifying allowed external image domains",
  },
  {
    question:
      "Which of the following can be used to generate dynamic Open Graph meta tags in Next.js?",
    options: ["next/head", "getStaticProps", "useRouter", "Clerk"],
    answer: "next/head",
  },
  {
    question: "What is the benefit of using server components in Next.js?",
    options: [
      "They reduce client-side bundle size",
      "They improve SEO",
      "They allow stateful components",
      "They enhance client-side interactivity",
    ],
    answer: "They reduce client-side bundle size",
  },
  {
    question:
      "Which of the following best describes the concept of 'hydration' in Next.js?",
    options: [
      "The process of rendering static HTML",
      "The process of reusing server-rendered HTML on the client",
      "The process of generating static props",
      "The process of routing",
    ],
    answer: "The process of reusing server-rendered HTML on the client",
  },
  {
    question: "How does Next.js facilitate building full-stack applications?",
    options: [
      "By supporting API routes",
      "By allowing server-side and client-side rendering",
      "By integrating with databases",
      "All of the above",
    ],
    answer: "All of the above",
  },
];
