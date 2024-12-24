export default function ProductLoading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Image gallery skeleton */}
          <div className="flex flex-col gap-4 animate-pulse">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200" />
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200" />
              ))}
            </div>
          </div>

          {/* Product info skeleton */}
          <div className="flex flex-col animate-pulse">
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4" />
            <div className="h-6 w-1/4 bg-gray-200 rounded mt-4" />

            {/* Seller info skeleton */}
            <div className="mt-6">
              <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
              <div className="flex items-center gap-2">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            </div>

            {/* Details skeleton */}
            <div className="mt-10">
              <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
              <div className="space-y-4">
                <div className="h-20 w-full bg-gray-200 rounded" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons skeleton */}
            <div className="mt-10 flex gap-4">
              <div className="flex-1 h-10 bg-gray-200 rounded" />
              <div className="h-10 w-10 bg-gray-200 rounded" />
              <div className="h-10 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
