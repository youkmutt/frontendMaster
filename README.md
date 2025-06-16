This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Initial Install

npx create-next-app@latest fronted-app --typescript
cd fronted-app
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force

# Install tailwind

npm install -D tailwindcss@3.4.3 postcss autoprefixer
npx tailwindcss init -p
rmdir /s /q .next

Update tailwind.config.js to enable purging unused styles:
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/pages/**/_.{js,ts,jsx,tsx}",
"./src/components/\*\*/_.{js,ts,jsx,tsx}",
// Add app directory if using `app/` structure:
"./src/app/\*_/_.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
};

Edit ./styles/globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

# Install icon

npm install lucide-react

# Install animation

npm install framer-motion

# Install OpenAi generate service and model from swagger

npm install rimraf --save-dev
npm install @openapitools/openapi-generator-cli -D

# in package.json

"update-api": "npm run main-api && npm run img-api && npm run jasper-api",
"main-api": "rimraf ./src/api_main && openapi-generator-cli generate -i http://10.11.60.173:30510/swagger/v1/swagger.json -g typescript-fetch -o ./src/api_main --skip-validate-spec && node ./scripts/fix-main-api.js",
"img-api": "rimraf ./src/api_url && openapi-generator-cli generate -i http://localhost:62743/swagger/v1/swagger.json -g typescript-fetch -o ./src/api_url --skip-validate-spec && node ./scripts/fix-url-api.js",
"jasper-api": "rimraf ./src/api_jasper && openapi-generator-cli generate -i http://10.11.60.173:30514/v3/api-docs -g typescript-fetch -o ./src/api_jasper --skip-validate-spec && node ./scripts/fix-jasper-api.js"

# in scripts edit base path of openapi-generator-cli generate(auto create localhost)

fix-main-api.js

# Install tools manage env

npm install --save-dev env-cmd

# run project

npm run dev
