export default function DemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-haven-cream">
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-bold text-haven-dark-green mb-4">
          Demo Page
        </h1>
        <p className="text-lg text-haven-terracotta">
          This is a temporary demo page to test if redirect works.
        </p>
        <p className="mt-6 text-sm text-gray-500">
          If you can see this page, the login flow is working.<br />
          The problem is likely in the protected dashboard route.
        </p>
      </div>
    </div>
  );
}