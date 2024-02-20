Online photo collage tool Project from [codementor.io](https://www.codementor.io)

### Requirements

- [ ] User is able to upload images without registration
- [ ] The user defines if they want to make a horizontal collage or a vertical collage and what border size and color they want.
- [ ] When the user clicks on “Make Collage”, the front-end calls the API, which in turn sends a processing job to the task queue. That means, that the images are processed asynchronously while a loading screen is shown to the end-user.
- [ ] The front-end can query the backend API to see if the processing has finished.
- [ ] The asynchronous processing module resizes the images to the same height for a horizontal collage, and to the same width for a vertical collage. Each image’s aspect ratio should remain the same.
- [ ] To make the collage, stitch the resized images together with the user-defined borders.
- [ ] Finally, the user is redirected to a page to download the final collage.
#### Getting Started

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
