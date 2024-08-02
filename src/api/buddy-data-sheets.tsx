import { ExternalLink } from "@/components/external-link";
import Markdown from "react-markdown";
import { z } from "zod";

const nonEmptyString = z.string().trim().min(1);

export const SHEETS = {
  Timers: {
    gid: 0,
    schema: z.object({
      title: nonEmptyString,
      description: z.optional(
        z.string().transform((x) =>
          x.length > 0 ? (
            <Markdown
              components={{
                a(props) {
                  const { children, ...rest } = props;
                  return <ExternalLink {...rest}>{children}</ExternalLink>;
                },
              }}
            >
              {x}
            </Markdown>
          ) : (
            x
          ),
        ),
      ),
      type: z.enum(["maintenance", "event", "reset"]),
      start: nonEmptyString
        .transform((x) => new Date(x).getTime())
        .refine((x) => x > 0),
      end: nonEmptyString
        .transform((x) => new Date(x).getTime())
        .refine((x) => x > 0),
    }),
  },
};
