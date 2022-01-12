import React from 'react'
import LegalPage from './LegalPage'

/**
 * Renders a Legal component filled with the fake terms of service document
 * below.
 */
function Terms() {
    return (
        <div className="col">
            <LegalPage textObj={fakeTermsObj} />
        </div>
    )
}

export default Terms

const fakeTermsObj = {
    title: "Terms of Service",
    lastUpdated: "00:00:00.000 January 1, 1970",
    sections: [
        {
            head: "Introduction",
            pars: [
                "We know you're not reading this."
            ],
        },
        {
            head: "Accepting the Contract",
            pars: [
                "By reading this contract you agree that you accept the terms and conditions of this contract."
            ],
        },
        {
            head: "We'll Do What We Want",
            pars: [
                "And technically you have already agree to let us.",
            ],
        },
        {
            head: "Prohibited Conduct",
            pars: [
                "You agree not to do anything that might in the future cause us inconvenience, whether or not you would reasonably be able to foresee such an incovenience.",
                "Any conduct that becomes a PR headache, turns out to be illegal, or otherwise at our sole discretion, shall ex post facto be considered a violation of these terms of service, and we have the right, though not the obligation, to take disproportionate action as we see fit.",
            ],
        },
        {
            head: "Our Right to Take Adverse Action",
            pars: [
                "We reserve every right to pursue any legal remedy we deem appropriate, reasonable, or expensive enough that you'll just give in, if we suspect you of committing any form of crimethought that may damage us, tangibly or not, in reality or otherwise."
            ],
        },
        {
            head: "Additional Terms",
            pars: [
                "Abandon hope all ye who enter here."
            ]
        },
    ]
}
