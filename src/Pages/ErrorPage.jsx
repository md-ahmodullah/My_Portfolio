import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <section className="w-10/12 mx-auto my-12 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-6xl font-extrabold text-gray-200 text-center">
          An Error Occured
        </h1>
        <img src="https://i.ibb.co.com/W6wx1m1/404.png" alt="404 Page" />
        <h2 className="text-3xl font-bold text-gray-500 text-center">
          Content Not Found
        </h2>
        <Link
          to="/"
          className="px-3 py-2 rounded-lg bg-blue-800 text-white text-lg font-bold hover:bg-orange-500"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}