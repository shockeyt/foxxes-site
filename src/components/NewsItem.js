import { v4 as uuidv4 } from 'uuid'
const NewsItem = (props) => {
  const {date, title, links, excerpt, image, image_alt} = props.data
  return (
    <div className="show-item">
      <div className="mx-lg-5 mb-2">
        {date && <p className="text-white text-small mb-0"><span>{ date }</span></p>}
        {title && <p className="text-white mb-0"><span>{ title }</span></p>}
        {image && <img className="w-100 my-2" src={image} alt={image_alt} />}
        {excerpt && <div className="text-white text-small mb-0" dangerouslySetInnerHTML={{__html: excerpt}} />}
        {links &&
          <p className="text-white text-small mb-0">
          {links && links.map((link) => 
            <a key={uuidv4()} className="mr-2" href={ link.url }>{link.link_title}</a>
          )}
          </p>
        }
      </div>
    </div>
  )
}

export default NewsItem