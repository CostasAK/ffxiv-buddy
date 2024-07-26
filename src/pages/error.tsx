import { Button } from "@/components/ui/button";
import { useRouteErrorMessage } from "@/hooks/use-route-error-message";
import Page from "@/layout/page";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteErrorMessage();
  console.error(error);

  return (
    <Page className="flex w-fit flex-col gap-4">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
      <Button asChild>
        <Link to="/" reloadDocument>
          Go Home
        </Link>
      </Button>
    </Page>
  );
}
