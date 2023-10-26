import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageContainer } from './ImageContainer'

function App() {
  const [count, setCount] = useState(0)
  const [arrayImage, setArrayImage] = [
    {
      id: 1,
      url: "https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png",
      name: "Charizard",
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_960_720.png",
      name: "Charmander",
    },
    {
      id: 3,
      url: "https://s.yimg.com/ny/api/res/1.2/TLxQ82SAuWxf6uwg2e4WCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/levelup_525/dba23de2487ea6e4f41d244e1e982267",
      name: "Tortuga"
    },
  ];
  return (
    <>
      <div>
        <ImageContainer arrayImage={arrayImage} />
      </div>
    </>
  );
}

export default App
