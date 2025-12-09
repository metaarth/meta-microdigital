import { useCounter } from '../hooks/useCounter'

const Counter = ({ end, duration = 2000 }) => {
  const { count, counterRef } = useCounter(end, duration)

  return (
    <h2 className="display-3 text-primary mb-3" ref={counterRef} data-toggle="counter-up">
      {count}
    </h2>
  )
}

export default Counter

