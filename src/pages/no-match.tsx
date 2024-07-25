import { Button } from "@/components/ui/button";
import Page from "@/layout/page";
import { Link } from "react-router-dom";

export function NoMatch() {
  return (
    <Page className="flex w-fit flex-col gap-4">
      <span>Page not found.</span>
      <Button asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </Page>
  );
}
