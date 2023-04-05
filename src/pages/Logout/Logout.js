import { useNavigate } from 'react-router';
import { useUserAuth } from '~/context/userAuthContext';
function Logout() {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };
    handleLogout();
    return <h3>Logout</h3>;
}
export default Logout;
