import { useRouteErrorMessage } from "../hooks/use-route-error-message";

export default function ErrorPage() {
  const error = useRouteErrorMessage();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
    </div>
  );
}
