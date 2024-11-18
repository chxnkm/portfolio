export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="sm:max-w-[75vw] mx-auto px-4 sm:px-0">
        <button className='px-4 mt-8 mx-auto py-1 bg-pastelOrange rounded-lg'>
          <a href="/#experience" rel="noopener noreferrer">
            <span className="inline-flex items-center font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg> Back
            </span>
          </a></button>
        {children}</div>

    </section>
  )
}