import React from 'react'
import PageWrap from '../shared/PageWrap'
import Bumper from '../shared/Bumper'
import QuickSort from './QuickSort'
import MergeSort from './MergeSort'
import HeapSort from './HeapSort'
import hatSort from './hatSort.gif'

function SortingAlgos() {
    const RANGE = 150;
    const WAIT_TIME = 10;

    const explanation =
        "I was reviewing sorting algorithms, because I am so cool, and wanted a better intuition " +
        "for how Mergesort works, but none of the visualizations I found show what's " +
        "going on in the helper array. So I just made my own." +
        "\n\nWhile I was at it I did Quicksort because why not?" +
        "\n\nAnd then I did Heapsort because I didn't stop to consider whether " +
        "this was a good use of time until much too late, and now here we are." +
        "\n\nThese components are quick and dirty, not well commented, hackfully " +
        "implemented, and obviously not intended for reuse. They are " +
        "here because I was too lazy to make a new React project " +
        "for them and because I like the Hatsort joke at the bottom."

    return (
        <PageWrap title="Sorting Algorithms">
            <p style={{ maxWidth: "600px" }}>
                {explanation}
            </p>
            <Bumper size={100} line={true} />
            <MergeSort
                range={RANGE}
                waitTime={WAIT_TIME / 4}
            />
            <Bumper size={100} line={true} />
            <QuickSort
                range={RANGE}
                waitTime={WAIT_TIME}
            />
            <Bumper size={100} line={true} />
            <HeapSort
                range={RANGE}
                waitTime={WAIT_TIME}
            />
            <Bumper size={100} line={true} />
            <div className="col">
                <h1>Hatsort</h1>
                <Bumper size={20} />
                <img
                    src={hatSort}
                    alt={"sorting hat"}
                />
            </div>
            <Bumper size={50} />
        </PageWrap>
    )
}

export default SortingAlgos
