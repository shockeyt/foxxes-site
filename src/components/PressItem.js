const PressItem = (props) => {
  return (
    <div className="show-item mx-lg-5 mb-2">
      <p className="text-white mb-0">
        <span>{ props.title }</span>
      </p>
      <p className="text-white text-small mb-0">
        <span>"{ props.excerpt }"</span>
      </p>
      <p className="text-white text-small mb-0">
        <a href={ props.link }>Link</a>
      </p>
    </div>
  )
}

export default PressItem