import { useState } from "react"

const useCounter = (initialValue) => {
	const [counter, setCounter] = useState(initialValue)

	const increment = () => {
		setCounter(counter+1)
	}

	const reset = () => {
		setCounter(initialValue)
	}
	const decrement = () => {
		setCounter(counter-1)
	}


	// Retornaremos las variables que vamos a utilizar en nuestro componente
	return [
		counter,
		increment,
		reset,
		decrement
	]
}

export default useCounter