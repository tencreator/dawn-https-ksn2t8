import config from "../config.json"
import RenderCatagories from "../components/Catagories"

export default function Home() {
  const Title = ()=>{
    return (
      <h1>{config.title}</h1>
    )
  }
  
  return (
    <main>
      <Title/>
      
      <RenderCatagories />
    </main>
  )
}
