import { html } from "hono/html";
import { FC } from "hono/jsx";

type Props = {
  title: string;
  description: string;
};

const Page: FC<Props> = ({ title, description, children }) => {
  const pageContent = (
    <div class="mx-auto min-h-screen max-w-6xl">{children}</div>
  );

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="${description}" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/styles.css" rel="stylesheet" />
        <title>${title}</title>
      </head>
      <body>
        ${pageContent}
      </body>
    </html>`;
};

export default Page;
