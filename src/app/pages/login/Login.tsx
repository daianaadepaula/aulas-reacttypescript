import { useCallback, useContext, useMemo, useRef, useState } from "react"

import { InputLogin } from "./components/InputLogin"
import { ButtonLogin } from "./components/ButtonLogin"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Login = () => {
	const inputPasswordRef = useRef<HTMLInputElement>(null)

	const { nomeDoUsuario } = useContext(UsuarioLogadoContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const emailLength = useMemo(() => {
		return email.length * 1000
	}, [email.length])


	const handleEntrar = useCallback(() => {
		console.log(email)
		console.log(password)
	}, [email, password])


	return (
		<div>
			<form>
				<p>Quantidade de caracteres no email: {emailLength}</p>
				<p>{nomeDoUsuario}</p>

				<InputLogin
					label="Email"
					value={email}
					onChange={newValue => setEmail(newValue)}
					onPressEnter={() => inputPasswordRef.current?.focus()}
				/>

				<InputLogin
					label="Senha"
					type="password"
					value={password}
					ref={inputPasswordRef}
					onChange={newValue => setPassword(newValue)}
				/>

				<ButtonLogin type="button" onClick={handleEntrar}>
					Entrar
				</ButtonLogin>
			</form>
		</div>
	)

}