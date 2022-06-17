import useBackground from "./hooks/useBackground"

/* Obtener las coordenadas del Mouse */
const MouseApp = () => {
	
	const {background, position } = useBackground()

	return (
		<div style={{background, height: '100vh'}}>
			<pre>
				{ JSON.stringify(position, null, 2)}
			</pre>
		</div>
	)
}

export default MouseApp