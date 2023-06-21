import './Retrieve.scss'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import ResultCard from './ResultCard'



const Retrieve = ()=>{
    const [mode, setMode] = useState("all")
    const [results, setResults] = useState([
        {
            "id": 1,
            "city": "Bengaluru",
            "area": "Electronic City Phase 1",
            "numEmployees": 45,
            "manager": "Mr. Kumar"
        },
        {
            "id": 3,
            "city": "Bengaluru",
            "area": "Electronic City Phase 2",
            "numEmployees": 41,
            "manager": "Mr. Singhal"
        }
    ]);

    return <div className="Retrieve">
        <Header
            title = "Retrieve"
            description = "Fetch all records, or look for them based on certain attributes"
        />

        <div className="options d-flex flex-row justify-content-evenly">
            <div className="findall">
                Fetch all records
            </div>
            <div className="search">
                Search for records
            </div>
            <button className="btn btn-dark">
                Search
            </button>
        </div>

        <div className="resultDisplay">
            {
                results.length ? 
                results.map((e)=>{
                    return <ResultCard
                        id = {e.id}
                        city={e.city}
                        area={e.area}
                        numEmployees={e.numEmployees}
                        manager={e.manager}
                    />
                })
                :
                <div className="noresults">
                    No records found
                </div>
            }
        </div>
    </div>
}

export default Retrieve;