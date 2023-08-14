import { Gallery } from "./components/gallery/Gallery"
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'

function App() {

  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8]

  return (
      <Gallery input_array={imgArray}/>
  )
}

export default App
