import JsxMarkdown from "markdown-to-jsx";
import { Link } from "@mui/material";

interface Props {
  children: string;
}

const Markdown = ({ children }: Props) => {
  return (
    <JsxMarkdown
      options={{
        overrides: {
          a: {
            component: Link,
          },
        },
      }}
    >
      {children}
    </JsxMarkdown>
  );
};

export default Markdown;
