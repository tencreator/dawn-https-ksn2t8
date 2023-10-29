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
  return (
    <div>
      {props.links.map((link: link[])=>{
  return <RenderLink id={link.id} name={link.name} url={link.url}/>
      })}
    </div>
  )
}

const RenderLink = (props: link) => {
  return (
    <Link key={props.id} href={props.url}>
      {props.name}
    </Link>
  )
}