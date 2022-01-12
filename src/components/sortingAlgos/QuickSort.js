import React, { useEffect, useState, useRef } from 'react'
import Bumper from '../shared/Bumper';
import BtnRow from './BtnRow';
import Visualizer from './Visualizer';

function QuickSort({ range, waitTime }) {
    const unsortedRef = useRef([]);
    const displayRef = useRef([]);

    const [list, setList] = useState([]);
    const [reseed, setReseed] = useState(false);
    const [sort, setSort] = useState(null);

    const sortRunningRef = useRef(false);
    const [sortRunning, setSortRunning] = useState(false);

    const [lo, setLo] = useState(-1);
    const [hi, setHi] = useState(-1);

    useEffect(() => {
        const _list = [];
        const _helper = [];
        for (let i = 0; i < range; i++) {
            _list.push(Math.floor(Math.random() * 100));
            _helper.push(0);
        }
        unsortedRef.current = [..._list];
        displayRef.current = [..._list]

        setList(_list);
    }, [reseed, range]);

    useEffect(() => {
        // Effectively a sleep function.
        async function hangFor(ms) {
            return new Promise(res => {
                setTimeout(res, ms);
            })
        }

        // The actual quicksort algorithm.
        async function quicksort() {
            if (sortRunningRef.current) {
                return;
            }
            sortRunningRef.current = true;
            setSortRunning(true);
            displayRef.current = [...unsortedRef.current];
            await sortHelper(displayRef.current, 0, list.length - 1);

            // Reset state when complete.
            setLo(-1);
            setHi(-1);
            sortRunningRef.current = false;
            setSortRunning(false);
        }

        // Quicksort helper.
        async function sortHelper(list, left, right) {
            if (!sortRunningRef.current) {
                stop();
                return;
            }
            setList([...list]);
            setLo(left);
            setHi(right);
            await hangFor(waitTime);
            const mid = await partition(list, left, right);
            if (left < mid - 1) {
                await sortHelper(list, left, mid - 1);
            }
            if (right > mid) {
                await sortHelper(list, mid, right);
            }
        }

        // Quicksort helper.
        async function partition(list, left, right) {
            if (!sortRunningRef.current) {
                stop();
                return;
            }
            // Average of first, last, and middle elements. QuickSelect would be
            // better but this is just a demo where I know this will be close
            // enough.
            const pivot =
                (list[left] + list[right] + list[parseInt((left + right) / 2)])
                / 3;
            while (left <= right) {
                while (list[left] < pivot) {
                    left++;
                    if (!sortRunningRef.current) {
                        stop();
                        return;
                    }
                    await hangFor(waitTime);
                }
                while (list[right] > pivot) {
                    right--;
                    if (!sortRunningRef.current) {
                        stop();
                        return;
                    }
                    await hangFor(waitTime);
                }
                if (left <= right) {
                    [list[left], list[right]] = [list[right], list[left]];
                    left++;
                    right--;
                    setList([...list]);
                    if (!sortRunningRef.current) {
                        stop();
                        return;
                    }
                    await hangFor(waitTime);
                }
            }
            return left;
        }

        if (sortRunningRef.current) {
            return;
        } else if (sort === null) {
            return
        } else {
            quicksort();
        }
    }, [sort, list.length, waitTime])

    const stop = () => {
        sortRunningRef.current = false;
        setSortRunning(false);
        displayRef.current = [...unsortedRef.current];
        setList([...unsortedRef.current])
    }

    return (
        <div className="col">
            <h1>Quicksort</h1>
            <Bumper size={20} />
            <Visualizer
                list={list}
                low={lo}
                hi={hi}
            />
            <Bumper size={20} />
            <BtnRow
                isRunning={sortRunning}
                start={() => setSort(!sort)}
                reseed={() => setReseed(!reseed)}
                stop={stop}
            />
        </div>
    )
}

export default QuickSort
