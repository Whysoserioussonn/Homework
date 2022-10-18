export default function Details({question}) {
  let ques = question[0]

  const loaded = () => {
      return (
          <div className="question-details">
              <h3 className="details-label">Category: <br/><span className="details-style">{ques.category.title}</span></h3>
              <h3 className="details-label">Points: <br/><span className="points-style">${ques.value}</span></h3>
              <h3 className="details-label">Question: <br/><span className="question-style">{ques.question}</span></h3>
          </div>
      )
  }
  const loading = () => {
      return (
          <div className="question-details">
              <h3 className="details-label">Category: </h3>
              <h3 className="details-label">Points: </h3>
              <h3 className="details-label">Question: </h3>
          </div>
      )
  }

  return question ? loaded() : loading()
}