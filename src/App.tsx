function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          ¡Página Funcionando!
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Bienvenido
            </h2>
            <p className="text-blue-700 mb-4">
              Esta es una página simple y funcional sin dependencias externas.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              Botón de Ejemplo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Característica 1</h3>
              <p className="text-gray-600">Descripción de la primera característica.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Característica 2</h3>
              <p className="text-gray-600">Descripción de la segunda característica.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
