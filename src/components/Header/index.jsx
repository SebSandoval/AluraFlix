import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-black text-white py-4 px-2 lg:px-6 border-b-blue-500  border-b-4">
            <div className="container mx-auto flex items-center justify-between " >
                {/* Logo */}
                <Link to="/">
                <img src="/src/assets/logoalura.png" alt="Logo Header" className="w-full max-w-20 md:max-w-52" />
                </Link>


                {/* Botones */}
                <nav className="flex space-x-4">
                    <Link
                        to="/"
                        className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300 text-sm md:text-lg flex items-center"
                    >
                        HOME
                    </Link>
                    <Link
                        to="/new-video"
                        className="px-4 py-2 rounded-md border-2 border-white text-white font-semibold shadow-lg hover:bg-white hover:text-black transition duration-300 text-sm md:text-lg flex items-center"
                    >
                        NEW VIDEO
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
