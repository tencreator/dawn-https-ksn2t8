import config from '../config.json'
import RenderLinks from './Links'

interface link {
  id: number
  name: string
  url: string
}

interface catagories {
  id: number
  name:string
  links: link[]
}

export default function RenderCatagories() {
  function Catagory({id, name, links}: catagories) {
    return (
      <div key={id}>
        <h2>{name}</h2>
        <RenderLinks links={links}/>
      </div>
    )
  }
  
  return (
    <div>
      {config.catagories.map((catagory: catagories)=>{
        return <Catagory id={catagory.id} name={catagory.name} links={catagory.links} />
      })}
    </div>
  )
}