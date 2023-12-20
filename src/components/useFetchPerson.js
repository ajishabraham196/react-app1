import { useState , useEffect} from "react"

 const useFetchPerson = (url) =>{

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const resp= await fetch(url);
                console.log(resp.ok);
                if(!resp.ok)
                {
                    console.log(isLoading);
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                console.log(isLoading);
                const user = await resp.json();
                setUser(user);

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchData();
    
    }, []);

    return {isLoading, isError, user}
}


export default useFetchPerson;

