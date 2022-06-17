import { useMemo } from 'react'
import useMousePosition from './useMousePosition';

const useBackground = () => {
	const position = useMousePosition()

	const background = useMemo(() => 
		position.x < window.innerWidth/2 ? 'pink' : 'orange'
	, [position])
	// SI NO colocas position, este lo memorizara como la position inicial. cada que ambien posicio se actualizara. 
	// un Hook personalizado puede igualmente utilizar otro hoook para hacer una funcion mas avanzada. 

  return { background, position };
}

export default useBackground