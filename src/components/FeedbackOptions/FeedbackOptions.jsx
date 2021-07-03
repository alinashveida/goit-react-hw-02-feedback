import { Button } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </>
  )
}
