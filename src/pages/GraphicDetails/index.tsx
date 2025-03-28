import { Link } from "react-router-dom";

export default function Details () {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold">Detalhes</h1>
      <Link className="text-blue-500 underline" to="/home">Voltar</Link>
    </div>
  );
};

