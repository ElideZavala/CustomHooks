import { useState, useEffect } from "react"

const initialPosition = { x: null, y: null}

const useMousePosition = () => {
	const [position, setPosition] = useState(initialPosition)	

	// Actualizacion en tiempor real el estado con la posicion del mouse
	useEffect(() =>{
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e
			setPosition({
				x: clientX,
				y: clientY
			})
		}
		// Cuando el mouse se mueve, ejecuta la función
		window.addEventListener('mousemove', handleMouseMove)
	})
		
	return position;
}

export default useMousePosition