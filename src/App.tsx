import { Provider } from 'react-redux'
import Movies from './screens/Movies'
import { store } from './store/store'
import Layout from './Layout'
function App() {

  return (
    <Provider store={store}>
      <Layout>
        <div className="font-bold p-10">
            <Movies />
        </div>
      </Layout>
    </Provider>
  )
}

export default App
