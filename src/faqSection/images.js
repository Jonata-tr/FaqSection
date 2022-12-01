

export const ShowImages = ({source, alt, id}) => {
  return(
    <div className="images" id={id}>
      <img src={source} alt={alt}/>
    </div>
  )
}
