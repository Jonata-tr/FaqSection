export const ShowAnswers = ({heading, content}) => {
  return(
    <div className="perguntas" onClick={() => {
      const show = document.querySelector(".respostas")
      show.classList.toggle("hide")
    }}>
      <h2>{heading}</h2>
      <div className="respostas hide">
        {content}
      </div>
    </div>
  )
}