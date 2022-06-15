import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { loggedIn } from '../utils/auth';

export default function RouteGuard({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn())
            navigate("/")
    })

    return children
}
