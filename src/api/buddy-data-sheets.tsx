import { Link } from "@/components/link";
import Markdown from "react-markdown";
import { z } from "zod";

export const SHEETS = {
  Timers: {
    gid: 0,
    schema: z.array(
      z.object({
        title: z.string(),
        description: z.string().transform((x) => (
          <Markdown
            components={{
              a(props) {
                const { children, ...rest } = props;
                return <Link {...rest}>{children}</Link>;
              },
            }}
          >
            {x}
          </Markdown>
        )),
        type: z.enum(["maintenance", "event", "reset"]),
        start: z.string().transform((x) => new Date(x).getTime()),
        end: z.string().transform((x) => new Date(x).getTime()),
      }),
    ),
  },
};
