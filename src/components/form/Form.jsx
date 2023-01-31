import { useState } from 'react';

function Form({
    array = [],
    setArray = () => console.error('Gotta provide a setArray function, Bruh.'),
    alphabetizeNewArry = true,
}) {
    const [inputValue, setInputValue] = useState('');
    const sortFunction = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const unsortedArrayToAdd = inputValue.includes(',') ? inputValue.split(',') : [inputValue];
        const arrayToAdd = alphabetizeNewArry ? [...array, ...unsortedArrayToAdd].sort(sortFunction) : [...array, ...unsortedArrayToAdd];
        setArray(arrayToAdd);
        setInputValue('');
    };
    
    return (
        <>
            <h3>Enter group one at a time or comma separated</h3>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
                <button
                    type="submit" 
                    id="form-submit-btn"
                    disabled={array.includes(inputValue)}
                >
                    Add them!
                </button>
            </form>
        </>
    );
}

export default Form;
