import { useState } from "react";

export const useFetching = (callback) => {
    const [isLosding, setIsLoadig] = useState(false);
    const [error, setError] = useState('');
    const fetching = async (...args) => {
        try {
            setIsLoadig(true)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoadig(false)
        }
    }
    return [fetching, isLosding, error]
} 