import React, { useEffect, useState, useRef } from 'react'
import Bumper from '../shared/Bumper';
import LabeledComponent from '../shared/LabeledComponent'
import BtnRow from './BtnRow';
import Visualizer from './Visualizer';

function MergeSort({ range, waitTime }) {
    const unsortedRef = useRef([]);
    const displayRef = useRef([]);
    const helpRef = useRef([]);
    const nullRef = useRef([]);


    const [list, setList] = useState([]);
    const [helper, setHelper] = useState([])
    const [sort, setSort] = useState(null);

    const sortRunningRef = useRef(false);
    const [sortRunning, setSortRunning] = useState(false);
    const [reseed, setReseed] = useState(true);


    const [currLo, setCurrLo] = useState(-1);
    const [currHi, setCurrHi] = useState(-1);

    useEffect(() => {
        const _list = [];
        const _helper = [];
        for (let i = 0; i < range; i++) {
            _list.push(Math.floor(Math.random() * 100));
            _helper.push(0);
        }
        nullRef.current = [..._helper];
        unsortedRef.current = [..._list];
        displayRef.current = [..._list]
        helpRef.current = [..._helper];

        setList(_list);
        setHelper(_helper);
    }, [reseed, range]);

    useEffect(() => {

        async function hangFor(ms) {
            return new Promise(res => {
                setTimeout(res, ms);
            })
        }

        async function mergesort() {
            if (sortRunningRef.current) {
                return;
            }
            sortRunningRef.current = true;
            setSortRunning(true);

            displayRef.current = [...unsortedRef.current];
            setList([...displayRef.current]);
            setHelper([...nullRef.current]);
            helpRef.current = [...nullRef.current];


            await msort(displayRef.current, helpRef.current, 0, displayRef.current.length - 1);
            setList([...displayRef.current])


            setCurrLo(-1);
            setCurrHi(-1);
            sortRunningRef.current = false;
            setSortRunning(false);
        }

        async function msort(_list, _helper, lo, hi) {
            if (!sortRunningRef.current) {
                return;
            }
            if (lo >= hi) {
                return;
            }
            const mid = Math.floor((lo + hi) / 2);
            await msort(_list, _helper, lo, mid);
            await msort(_list, _helper, mid + 1, hi);
            await merge(_list, _helper, lo, mid, hi);
        }

        async function merge(_list, _helper, lo, mid, hi) {
            if (!sortRunningRef.current) {
                return;
            }
            setCurrLo(lo);
            setCurrHi(hi);
            for (let i = lo; i <= hi; i++) {
                _helper[i] = _list[i];
                setList([..._list]);
                setHelper([..._helper]);
                await hangFor(waitTime);
            }
            let left = lo;
            let right = mid + 1;
            let curr = lo;
            while (left <= mid && right <= hi) {
                if (_helper[left] < _helper[right]) {
                    _list[curr] = _helper[left];
                    left++;
                } else {
                    _list[curr] = _helper[right];
                    right++;
                }
                curr++;
                setList([..._list]);
                setHelper([..._helper]);
                if (!sortRunningRef.current) {
                    return;
                }
                await hangFor(waitTime);
            }
            const remainder = mid - left;
            for (let i = 0; i <= remainder; i++) {
                _list[curr + i] = _helper[left + i];
                setList([..._list]);
                setHelper([..._helper]);
                if (!sortRunningRef.current) {
                    return;
                }
                await hangFor(waitTime);
            }
        }

        if (sortRunningRef.current) {
            return
        } else if (sort === null) {
            return
        } else {
            mergesort();
        }
    }, [sort, waitTime])

    const wrapStyle = {
        width: "100%",
        maxWidth: "650px",
    }

    const stop = () => {
        sortRunningRef.current = false;
        setSortRunning(false);
        displayRef.current = [...unsortedRef.current];
        setList([...unsortedRef.current]);
    }

    return (
        <div className="col" style={wrapStyle}>
            <h1>Mergesort</h1>
            <Bumper size={20} />
            <LabeledComponent label="Original Array">
                <Visualizer
                    list={list}
                    low={currLo}
                    hi={currHi}
                />
            </LabeledComponent>
            <Bumper size={20} />
            <LabeledComponent label="Helper Array">
                <Visualizer
                    list={sortRunning ? helper : nullRef.current}
                    isHelper={true}
                    low={currLo}
                    hi={currHi}
                />
            </LabeledComponent>
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

export default MergeSort
