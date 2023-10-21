import { format } from 'date-fns';

const Card = ({pet}) => {
const formattedDate = format(new Date(pet.date), 'dd/MM/yyyy h:mm a');

    return (
        <div className="registration-card">
            <p>{formattedDate}</p>
            <h4>{pet.name}</h4>
            <h5>{pet.gender}</h5>
            <h5>{pet.age} años</h5>
            <p>{pet.owner}</p>
        </div>
    )
}
export default Card;