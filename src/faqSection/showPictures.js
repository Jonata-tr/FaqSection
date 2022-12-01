export const ShowPictures = ({sourceDesk, sourceMob, source, alt, id}) => {
  return(
   <div className="bg-img">
      <picture>
        <source media='(min-width:765px)' srcSet={sourceDesk} alt={alt} id={id}/>
        <source media='(min-width: 0px)' srcSet={sourceMob} alt={alt} id={id}/>
        <img src={source} alt={alt}/>
    </picture>
   </div>
  )
}