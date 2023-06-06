import Navbar from "./Navbar"
import NewsAddForm from "./NewsAddForm"
import NewsFilter from "./NewsFilter"
import NewsLIst from "./NewsList/NewsLIst"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="content">
        <NewsLIst/>
        <div className="content__page">
          <NewsAddForm/>
          <NewsFilter/>
        </div>
      </div>
    </div>
  )
}

export default App
