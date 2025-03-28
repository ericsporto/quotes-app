import { Link } from "react-router-dom";

export default function Home () {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link className="text-blue-500 underline" to="/details">Ver Detalhes</Link>
    </div>
  );
};


