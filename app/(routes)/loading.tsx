export default function Loading() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title skeleton */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="h-10 w-64 animate-pulse rounded-lg bg-muted" />
          <div className="h-5 w-96 max-w-full animate-pulse rounded-md bg-muted" />
        </div>

        {/* Content skeleton */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4 rounded-xl border p-6">
              <div className="aspect-video animate-pulse rounded-lg bg-muted" />
              <div className="h-6 w-3/4 animate-pulse rounded-md bg-muted" />
              <div className="space-y-2">
                <div className="h-4 animate-pulse rounded-md bg-muted" />
                <div className="h-4 w-5/6 animate-pulse rounded-md bg-muted" />
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-md bg-muted" />
                <div className="h-6 w-16 animate-pulse rounded-md bg-muted" />
                <div className="h-6 w-16 animate-pulse rounded-md bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
