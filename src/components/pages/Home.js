// Placeholder Home page
import React from 'react'
import PageWrap from '../shared/PageWrap'
import ShowcaseIngrate from '../shared/Showcase_Ingrate'
import Button from '../shared/Button'
import { useNavigate } from 'react-router-dom'
import Blurb from '../shared/Blurb'
import Bumper from '../shared/Bumper'
import LinkRow from '../shared/LinkRow'

/**
 * Boilerplate home page.
 */
function Home() {
    const nav = useNavigate();

    const aboutText = "This is a demo React app that shows off a bunch of " +
        "open source React components that I frequently reuse and remix." +
        "\n\nThis component, for example, is a Blurb.";

    return (
        <PageWrap>
            <ShowcaseIngrate
                title={"hello"}
                subtitle={"cruel world"}
            />
            <Button
                size="large"
                text="Demo"
                darkBg={true}
                onClick={() => nav("/demo")}
            />
            <Bumper size={20} />
            <LinkRow
                links={[
                    {
                        onClick: () => nav("/legal/privacy"),
                        text: "Lack of Privacy Policy",
                    },
                    {
                        onClick: () => nav("/sorting-algos"),
                        text: "Talk Nerdy To Me",
                    },
                    {
                        onClick: () => nav("/legal/terms"),
                        text: "These Are My Terms",
                    },
                ]}
            />
            <Bumper size={120} line={true} />
            <Blurb
                title="About"
                text={aboutText}
            />
            <Bumper size={120} />
        </PageWrap>
    )
}

export default Home
