const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
    return (
        <>
            {isLoggedIn? (
                <div>
                    <p>Bem vindo {user}</p>
                    <button onClick={Logout} className="button">Logout</button>
                </div>
            ) : (
                <div>
                    <p>Você não pode acessar essa página</p>
                    <button onClick={Login} className="button">Login</button>
                </div>
            )
            }
        </>
    )
}

export default RestrictedPage;