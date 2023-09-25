


import { RecoilRoot } from 'recoil'
import './App.css'
import ModalManager from './ModalManager'

function App() {

  

  return (
    <RecoilRoot>
      <div className="App">
        <main>
          <ModalManager />
        </main>
      </div>
    </RecoilRoot>
  )
}

export default App
