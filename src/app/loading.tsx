export default function Loading() {
  // Stack Auth uses React Suspense; this renders while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-foreground" />
    </div>
  );
}
