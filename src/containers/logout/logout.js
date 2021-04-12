import { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Logout = ({ clearUser, user }) => {
    const history = useHistory()
    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('state')
        history.push('/login')
        clearUser()
    }, [user, history, clearUser])

    return null
}

export default Logout
