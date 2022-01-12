import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { breakpoints, resFactors } from '../components/shared/magicConstants';

/**
 * Custom hook that returns a responsiveness factor for shrinking elements
 * (especially fonts) for different screens.
 */
export default function useResponseFactor() {
    const [resFactor, setResFactor] = useState(1.0);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width < breakpoints.phoneSmall) {
            setResFactor(resFactors.phoneSmall)
        } else if (width < breakpoints.phone) {
            setResFactor(resFactors.phone);
        } else if (width < breakpoints.tablet) {
            setResFactor(resFactors.tablet);
        } else if (width < breakpoints.tabletLarge) {
            setResFactor(resFactors.tabletLarge)
        } else {
            setResFactor(1.0);
        }
    }, [width])

    return resFactor;
}
