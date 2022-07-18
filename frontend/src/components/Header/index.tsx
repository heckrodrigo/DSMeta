import logo from '../../assets/logo.svg';
import  './styles.css';

function Header () {
    return (

        <header>

            <div className="logo-container">
                <img src={logo} alt="DSMeta" /> 
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/heckrodrigo">@heckrodrigo</a>
                    </p>
            </div>
        </header>

    )

}

export default Header;