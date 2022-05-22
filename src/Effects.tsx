import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [getSourId, setSoureId] = useState('first');
    const [getNumForSourId, setNumForSoureId] = useState('-1');
    const funcscribe = (param: any) => {
        return setNumForSoureId(param);
    };
    useEffect(() => {
        setSoureId(props.sourceId);
        setNumForSoureId('-1');
        subscribe(props.sourceId, funcscribe);
        return () => {
            unsubscribe(props.sourceId, funcscribe);
        };
    }, [props.sourceId]);

    return (
        <div>
            {getSourId}: {getNumForSourId}
        </div>
    );
}
