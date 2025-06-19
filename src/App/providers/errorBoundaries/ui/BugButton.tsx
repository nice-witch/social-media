import {useEffect, useState} from "react";
import {Button} from "Shared/ui/Button/Button";

// кнопка для тестирования Error Boundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);
    useEffect(() => {
        if(error) throw new Error;
    }, [error]);

    return (
        <Button onClick={onThrow}>
            trow error
        </Button>
    );
};