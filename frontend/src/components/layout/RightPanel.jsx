export default function RightPanel() {

  return (

    <aside className="w-80 bg-white border-l p-5">

      <h2 className="font-bold mb-4">

        Estado del Expediente

      </h2>

      <div className="space-y-3">

        <Indicador titulo="Claridad" valor="0%" />

        <Indicador titulo="Coherencia" valor="0%" />

        <Indicador titulo="Cronología" valor="0%" />

        <Indicador titulo="Evidencias" valor="0%" />

      </div>

    </aside>

  );

}

function Indicador({ titulo, valor }) {

  return (

    <div className="border rounded-xl p-4">

      <div className="text-sm text-gray-500">

        {titulo}

      </div>

      <div className="text-2xl font-bold">

        {valor}

      </div>

    </div>

  );

}
