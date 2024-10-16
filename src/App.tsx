import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handle(ID: string) {
    window.open(
      `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`, // URL da página de autenticação
      'authPopup', // Nome da janela (opcional)
      'width=600,height=900,scrollbars=yes' // Tamanho e opções da janela
    )
    // window.location.href = `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Registo de dados</h1>
      <div className="card">
        {[
          'c7eb52ea-ba17-4d05-8862-8b951ccc4089',
          'd4228666-36a2-46c3-8469-09823776g3d2r2',
          'd4228666-36a2-46c3-8469-dbc537960f84',
        ].map((item, i) => {
          return (
            <button onClick={() => handle(item)}>
              Fazer registo Empresa {i + 1}
            </button>
          )
        })}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
