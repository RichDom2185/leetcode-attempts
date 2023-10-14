import { FC } from "hono/jsx";

type Props = {
  to: string;
  external?: boolean;
};

const Link: FC<Props> = ({ to, external = false, children }) => {
  return (
    <a
      class="hover:underline text-blue-600 hover:text-blue-900 transition-colors"
      href={to}
      {...{
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      }}
    >
      {children}
    </a>
  );
};

export default Link;
