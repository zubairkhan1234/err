
// import AppRoute from './Component/routing/route'
import Navigation from './Component/navigation/navigation'
import {GlobalStateProvider} from './context/context'



function App() {
  return (
    <>
    <GlobalStateProvider >
      <Navigation />
    </GlobalStateProvider>
    </>
  );
}

export default App;
