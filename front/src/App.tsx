import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          <p>top</p>
        </h1>
      </div>
      <div className="bg-gray-200 h-24 flex items-center justify-center">
        <p>bottom</p>

      </div>
    </div>

  )
}

export default App