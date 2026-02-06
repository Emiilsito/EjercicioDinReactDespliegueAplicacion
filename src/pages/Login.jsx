import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
function Login() {
    const { userLogged, login } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate("/admin");
    };
    if (userLogged) {
        return (
            <Layout>
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Ya estás logueado</h2>
                <p>Puedes acceder al panel de administración.</p>
            </div>
            </Layout>
        );
    }
    return (
        <>
        <Layout>
            <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-xl font-bold mb-4">Login Simulado</h2>
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Login
                </button>
            </div>
        </Layout>
        </>
    );
}
export default Login;