import './App.css';
import { getCountries } from './countries';

function App() {
  const [countries, setCountries] = useState([]); 
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);
  return (
    
}

export default App;
