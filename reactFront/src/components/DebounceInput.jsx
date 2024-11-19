import { useState, useEffect } from 'react';
import { XCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
    const [value, setValue] = useState(keyWord);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [value, onChange]);

    const clearInput = () => {
        setValue('');
        onChange('');
        DebouncedInput.value=''
        
    };

    return (
        <div className='relative'>
            <input
                {...props}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='text-gray-600 border-gray-300 outline-indigo-700 px-6 py-2 bg-gray-200 rounded p-2'
                placeholder='Buscar...'
            />
            <MagnifyingGlassIcon className='w-5 h-5 absolute top-2.5 left-1' />
            {value && (
                <XCircleIcon className='w-5 h-5 absolute top-2.5 right-1 cursor-pointer' onClick={clearInput} />
            )}
        </div>
    );
};

export default DebouncedInput;
