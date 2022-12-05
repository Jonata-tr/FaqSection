import {useState} from 'react'

export const ShowAnswers = () => {

  const [click, setClick] = useState(null)

  const alternarRespostas = (i) => {
    if(click === i){
      return setClick(null)
    }    

    setClick(i)
  }

  return(
    <div className='faqs'>
      {acordionContent.map((valor, index) => (
          <>
          <div className='perguntas' onClick={() => {setClick(index)}}>
            {valor.heading}
          </div>
          <div className={click === index ? "respostas show" : 'respostas'}>
            {valor.content}
          </div>
          </>
      ))}
    </div>
  )
}

const acordionContent = [
  {
    id:'1',
    heading: 'How many team members can I invite?',
    content: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan'  
  },
  {
    id:'2',
    heading: 'What is the maximum file upload size?',
    content: 'No more than 2GB. All files in your account must fit your allotted storage space.'  
  },
  {
    id:'3',
    heading: 'How do I reset my password?',
    content: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'  
  },
  {
    id:'4',
    heading: 'Can I cancel my subscription?',
    content: 'Yes! Send us a message and we’ll process your request no questions asked.'  
  },
  {
    id:'5',
    heading: 'Do you provide additional support?',
    content: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'  
  }
]