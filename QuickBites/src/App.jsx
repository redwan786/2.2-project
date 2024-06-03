import { useState } from "react"

const App = () => {
  let heroData = [
    {text1:"Dive info",text2:"what you love"},
    {text1:"Indulge",text2:"your passionns"},
    {text1:"Give in to",text2:"your passionns"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);
  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App