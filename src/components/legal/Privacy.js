import React from 'react'
import LegalPage from './LegalPage'

/**
 * Renders a Legal component filled with the fake privacy policy below.
 */
function Privacy() {
    return (
        <div className="col">
            <LegalPage textObj={fakePrivacyObj} />
        </div>
    )
}

export default Privacy

const fakePrivacyObj = {
    title: "Privacy Policy",
    lastUpdated: "00:00:00.000 January 1, 1970",
    sections: [
        {
            head: "Introduction",
            pars: [
                `Ingrate, LLC (“Ingrate”, “we", “our", “us”, or other first person pronouns) provides web based hilarity. We are legally obligated to, at our sole and unappealable discretion, either care about, or pretend to care about, your privacy.`,
                "This Privacy Policy is the bare mininum boilerplate we are required to show you to maintain our limited liability.",
                "We care deeply about making this document as boring as possible. We're operating under the assumption that the combination of your illiteracy, laziness, and entitlement will create a critical mass of apathy that stops you from reading it in the first place.",
            ],
        },
        {
            head: "Your Rights",
            pars: [
                "[This space intentionally left blank.]",
            ],
        },
        {
            head: "What You Can Do About It",
            pars: [
                "N/A.",
            ]
        },
        {
            head: "Third Parties",
            pars: [
                "Ingrate partners with the NSA, the Republican National Committee, Apple, and various other terrorist organizations around the world to collect as much information as we can about our users.",
            ],
            subSections: [
                {
                    head: "The NSA",
                    pars: [
                        "We see everything you do, Karen."
                    ],
                    link: "https://www.nsa.gov/",
                },
            ]
        },
        {
            head: "Users in Europe and California",
            pars: [],
            subSections: [
                {
                    head: "Users in Europe",
                    pars: [
                        "If you are in the European Union or European Economic Area, you are either a warmongering Nazi or a cheese eating surrender monkey. In either case, good day sir. I say GOOD DAY!",
                    ],
                    link: "https://gdpr-info.eu/chapter-3/",
                },
                {
                    head: "Users in California",
                    pars: [
                        "If you are in the state of California, you have bigger problems than privacy.",
                    ],
                    link: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article="
                },
            ]
        },
        {
            head: "Your Access To the Information We Collect",
            pars: [
                "To exercise your rights to access, deletion, or other treatment of your information, go to an abandoned crossroads the night of a full moon. At precisely midnight, walk 666 paces into the nearest field, slit a chicken's throat, pour the blood out on the ground, and wait to feel a tap on your shoulder. DO NOT turn around. Tell the unspeakable monstrosity standing behind you what you want and hope for the best.",
                "Users who exercise this option accept the associated eternal risks to any semblence of a soul they may have."
            ]
        },
        {
            head: "Conclusion",
            pars: [
                "Suck it, nerd!",
            ]
        },
    ]
}