const PhotoItem = (props) => {
  return (
    <div className="photo-item">
      <img src={props.image} alt={props.alt} />
    </div>
  )
}

export default PhotoItem