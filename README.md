This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### El proyecto se pide:

You have to build a Full-Stack web app to calc all numeric params in a list. User will be able to see all previous queries too.

#### El proyecto se pide:Requirements:

An endpoint /calc that receives an undetermined number of arguments and returns the sum of those arguments that are numerical (you could receive different types of data).
A second endpoint /history that returns all previous calls to /calc.
A form view to add several values (one per field, no limit), send them to /calc endpoint and, then, show the result.
A list view with all previous queries.

#### We will consider the following aspects in your code:

- Files and folders structure
- Component size
- Testing
- Error handling
- Logic coupling

#### Additional aspects we will consider:

- Good-looking interface
- Use local storage or Redux to store the last query between sessions
- Use Error Boundaries
- Use of Typescript
- Use of environment variables

#### In case of using React:

- Don't use classes
- Use react hooks / custom hooks
- Use react redux

#### Indications:

- Create a public repository (Github, Gitlab...) and share it with us.
- Try to commit small changes frequently. We want to see how you build your code step by step.
- Let us know when you are done, of course ;-)
