import Auth from "../Auth/Auth";
import { useCookies } from "react-cookie";
import Main from "../Main/Main";
function App() {
	const [cookies, ,] = useCookies(null);

	return (
		<div className="app-container">
			{cookies["AuthToken"] && <Main />}
			{!cookies["AuthToken"] && <Auth />}
		</div>
	);
}

export default App;
