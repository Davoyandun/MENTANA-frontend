import { useEffect, useState } from "react"
import { useAppContext } from "../context"

export default function useSession () {
	const {userState} = useAppContext()

    const [tokenFromLocalStorage, setTokenFromLocalStorage] = useState('')

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			setTokenFromLocalStorage(token)
		} else {
			setTokenFromLocalStorage('')
		}
	}, [userState.token]) 

    return {
        loggedIn: !!tokenFromLocalStorage,
    }
}