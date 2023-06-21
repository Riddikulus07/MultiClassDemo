import './ResultCard.scss'

const ResultCard = ({id, city, area, numEmployees, manager})=>{
    return <div className="ResultCard d-flex flex-row flex-wrap">
        <div className="id">
            {id}
        </div>
        <div className="areancity">
            {`${area}, ${city}`}
        </div>
        <div className="numEmployees">
            {`${numEmployees} employees`}
        </div>
        <div className="manager">
            {`Managed by ${manager}`}
        </div>
    </div>
}

export default ResultCard;