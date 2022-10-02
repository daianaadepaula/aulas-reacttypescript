import { useRef } from "react"
import { Link } from "react-router-dom"


export const Dashboard = () => {
	const conunterRef = useRef(0)

	return (
		<div>
			<p>Dashboard</p>

			<p>Contador: {conunterRef.current}</p>

			<button onClick={() => conunterRef.current++}>Somar</button>
			<button onClick={() => console.log(conunterRef.current++)}>Log</button>

			<Link to="/entrar">Login</Link>
		</div>
	)

}