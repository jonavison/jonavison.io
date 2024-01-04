import { ErrorCard } from "@/components/cards/error-card";

export default function PageNotFound() {
  return (
    <>
      <ErrorCard
        title="Page not found"
        description="The page you are looking for does not exist"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </>
  );
}
