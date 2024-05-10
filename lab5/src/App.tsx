import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import myStore from './MyStore';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState('');

    useEffect(() => {
        setTimeout(() => {
            myStore.loadDataFromLocalStorage();
            setLoading(false);
        }, 2000); // 2 secunde
    }, []);

    const handleUpdateData = () => {
        const updatedData = [...myStore.data, newData];
        myStore.updateData(updatedData);
        setNewData(''); // Clear input
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <ul>
                        {myStore.data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <input type="text" value={newData} onChange={(e) => setNewData(e.target.value)} />
                    <button onClick={handleUpdateData}>Add Data</button>
                </div>
            )}
        </div>
    );
};

export default observer(App);
