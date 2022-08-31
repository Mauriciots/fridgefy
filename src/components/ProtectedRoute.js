import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext'; 

const ProtectedRoute = ({ children }) => {
    const { state } = useAppContext();

    if (state.user) {
        return <>{children}</>
    }

    return <Navigate to={"/"} replace />
}

export default ProtectedRoute;