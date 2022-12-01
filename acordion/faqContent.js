export const ShowAnswers = ({heading, content}) => {
  return(
    <div className="perguntas" onClick={() => {
      const show = document.querySelector(".respostas")
      show.classList.toggle("hide")
    }}>
      <span>{heading}</span>
      <div className="respostas hide">
        {content}
      </div>
    </div>
  )
}