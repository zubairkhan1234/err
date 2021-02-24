
import { baseUrl } from '../../core/index'

function Logout() {

    const Logout = () => {
        event.preventDefault();
        axios({
            method: 'post',
            url: baseUrl + '/logout',
            withCredentials: true
        }).then((response) => {
            if (response.status === 200) {
                console.log(response)
                alert(response.data.message)
                globalStateUpdate(prev => ({
                    ...prev,
                    loginStatus: true,
                }))
                history.push("/Dashboard");
            }
            else {
                history.push("/login");
            }
        }).catch((error) => {
            console.log(error.data.message);
        });
    }



    return (
        <>

            <button onClick={Logout}></button>

        <>
                )
}