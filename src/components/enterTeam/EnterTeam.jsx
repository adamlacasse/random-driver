import { useState } from 'react';
import Form from '../form/Form';
import currentGiraffes from '../../data/currentGiraffes.json';
import trashIcon from '../../images/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './EnterTeam.scss';

function EnterTeam({ unrandomizedGroup, setUnrandomizedGroup }) {
    const [inputValue, setInputValue] = useState('');
    const [giraffesAdded, setGiraffesAdded] = useState(false);

    const sortFunction = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })

    const handleAddGiraffes = () => {
        setUnrandomizedGroup([...unrandomizedGroup, ...currentGiraffes].sort(sortFunction));
        setGiraffesAdded(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.includes(',')) {
            const peepsToAdd = inputValue.split(',');
            setUnrandomizedGroup([...unrandomizedGroup, ...peepsToAdd].sort(sortFunction));
            setInputValue('');
            return;
        }
        setUnrandomizedGroup([...unrandomizedGroup, inputValue].sort(sortFunction));
        setInputValue('');
    };
    
    return (
        <section id="enter-team-section">
            <Form array={unrandomizedGroup} setArray={setUnrandomizedGroup} />
            <h3>and/or...</h3>
            <button id="add-giraffes-btn" onClick={handleAddGiraffes} disabled={giraffesAdded}>
                Populate with the current Giraffe Squad
            </button>
            {unrandomizedGroup.length > 0 && <ul>
                {unrandomizedGroup.map(member => (
                    <li key={member}>
                        <span>{member}</span>
                        <button 
                            type="button" 
                            className="inline-btn" 
                            onClick={() => setUnrandomizedGroup(unrandomizedGroup.filter((personToRemove) => personToRemove != member))}
                        >
                            <img src={trashIcon} className="btn-icon" />
                        </button>
                    </li>
                ))}
            </ul>}
        </section>
    );
}

export default EnterTeam;
