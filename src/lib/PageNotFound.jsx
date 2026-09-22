import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div>
          <h1 className="text-7xl font-light text-slate-300">404</h1>
          <div className="h-0.5 w-16 bg-slate-200 mx-auto mt-2" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
          <p className="text-slate-600">The page <span className="font-medium text-slate-700">{location.pathname}</span> could not be found.</p>
        </div>
        <Link to="/" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0a1a2e] rounded-md hover:bg-[#132c49] transition-colors">Return Home</Link>
      </div>
    </div>
  );
}
