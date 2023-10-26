import Link from 'next/link'

interface props {
  links: link[]
}

interface link {
  id: number
  name: string
  url: string
}

export default function RenderLinks(props: props) {
  const RenderLink = ({id, url, name}: link) => {
    return (
      <Link key={id} href={url}>
        {name}
      </Link>
    )
  }
  
  return (
    <div>
      {props.links.map((link: link[])=>{
  return <RenderLink id={link.id} name={link.name} url={link.url}/>
      })}
    </div>
  )
}