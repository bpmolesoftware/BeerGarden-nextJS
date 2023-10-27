import { useEffect, useState } from "react";

export default function Home(){
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = 'http://localhost:3000/api/getdata';
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res);
            setdataResponse(res.results)
        }
        getPageData();
    }, []);
    return (
        <div className={styles.container}>

            <div>mnogo div hui</div>
        </div>
    );
}