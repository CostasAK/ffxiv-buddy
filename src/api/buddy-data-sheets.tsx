import { Link } from "@/components/link";
import Markdown from "react-markdown";
import { z } from "zod";

const nonEmptyString = z.string().trim().min(1);

export const SHEETS = {
  Timers: {
    gid: 0,
    schema: z.object({
      title: nonEmptyString,
      description: z.optional(
        nonEmptyString.transform((x) => (
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
      ),
      type: z.enum(["maintenance", "event", "reset"]),
      start: nonEmptyString.transform((x) => new Date(x).getTime()),
      end: nonEmptyString.transform((x) => new Date(x).getTime()),
    }),
  },
};
