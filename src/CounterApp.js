import useCounter from './hooks/useCounter'

const CounterApp = () => {
	const [counter, increment, reset, decrement] = useCounter(5)

  return (
	<div>
	 <h1>Clicks: { counter }</h1>
	 <button onClick={ increment }>
		Increment
	 </button>
	 <button onClick={ reset }>
		Reset
	 </button>
	 <button onClick={ decrement }>
		Decrement
	 </button>
	</div>
  )
}

export default CounterApp