const VideoItem = (props) => {
  const {type, video, schema} = props.data

  const schemaHtml = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "${schema.name}",
      "description": "${schema.description}",
      "thumbnailUrl": [
        "${schema.thumbnailUrl1}",
        "${schema.thumbnailUrl2}",
        "${schema.thumbnailUrl3}"
      ],
      "uploadDate": "${schema.uploadDate}"
    }
  </script>`
  
  return (
    <div className={(type === props.type) ? "video-item show px-2 mb-3" : "video-item px-2 mb-3"}>
      {video && <div className="embed-video" dangerouslySetInnerHTML={{__html: video}} />}
      <div className="video-schema" dangerouslySetInnerHTML={{__html: schemaHtml}} />
    </div>
  )
}

export default VideoItem