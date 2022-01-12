import React, { useState, useEffect, useRef } from 'react'
import Bumper from '../shared/Bumper';
import Visualizer from './Visualizer';
import BtnRow from './BtnRow';

function HeapSort({ range, waitTime }) {
    const unsortedRef = useRef([]);
    const displayRef = useRef([]);
    const [list, setList] = useState([]);

    const [reseed, setReseed] = useState(true);
    const [sort, setSort] = useState(null);

    const sortRunningRef = useRef(false);
    const [sortRunning, setSortRunning] = useState(false);
    const [index, setIndex] = useState(-1);

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
        // I was tired of learning and decided to just copy/paste from here:
        // https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php
        async function heapSort() {
            if (sortRunningRef.current) {
                return;
            }
            sortRunningRef.current = true;
            setSortRunning(true);
            displayRef.current = [...unsortedRef.current];

            const a = displayRef.current;
            let l = a.length;

            const heapify = async (a, i) => {
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                let max = i;
                if (left < l && a[left] > a[max]) max = left;
                if (right < l && a[right] > a[max]) max = right;
                if (max !== i) {
                    [a[max], a[i]] = [a[i], a[max]];
                    heapify(a, max);
                }
                if (!sortRunningRef.current) {
                    stop();
                    return;
                }
                await hangFor(waitTime);
            };
            for (let i = Math.floor(l / 2); i >= 0; i -= 1) {
                await heapify(a, i);
                setIndex(i);
                setList([...a]);
                if (!sortRunningRef.current) {
                    stop();
                    return;
                }
                await hangFor(waitTime);
            }
            for (let i = a.length - 1; i > 0; i--) {
                [a[0], a[i]] = [a[i], a[0]];
                l--;
                await heapify(a, 0);
                setIndex(i);
                setList([...a]);
                if (!sortRunningRef.current) {
                    stop();
                    return;
                }
                await hangFor(waitTime);
            }
            //return a;


            setIndex(-1);
            sortRunningRef.current = false;
            setSortRunning(false);
        };

        if (sortRunningRef.current) {
            return;
        } else if (sort === null) {
            return
        } else {
            heapSort();
        }
    }, [sort, waitTime])

    const stop = () => {
        sortRunningRef.current = false;
        setSortRunning(false);
        displayRef.current = [...unsortedRef.current];
        setList([...unsortedRef.current])
        setIndex(-1);
    }

    return (
        <div className="col">
            <h1>Heapsort</h1>
            <Bumper size={20} />
            <Visualizer
                list={list}
                low={index}
                hi={index}
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

export default HeapSort
