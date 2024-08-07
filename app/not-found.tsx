export default function Custom403() {
    return (
      <div className="flex h-80">
        <div className="m-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="currentColor"
            className="bi bi-exclamation-diamond-fill mb-4 mx-auto"
            viewBox="0 0 16 16"
          >
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <h1 className="font-bold">404 | This page could not be found</h1>
        </div>
      </div>
    );
  }
  