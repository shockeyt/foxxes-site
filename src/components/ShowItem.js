const ShowItem = (props) => {
  return (
    <div className="show-item mx-lg-5 mb-2">
      <p className="text-white mb-0">
        <span>{ props.date }</span>
        <span> - { props.venue }</span>
        {props.time && <span> - { props.time }</span>}
      </p>
      <p className="text-white text-small mb-0">
        {props.support && <span>{ props.support }</span>}
      </p>
      <p className="text-white text-small mb-0">
        {props.price > 0 && <span>${ props.price }</span>}
        {props.link && <span> - <a href={ props.link }>Link</a></span>}
      </p>
    </div>
  )
}

export default ShowItem