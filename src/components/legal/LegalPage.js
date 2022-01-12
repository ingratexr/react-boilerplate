import React from 'react'
import PageWrap from '../shared/PageWrap'

/**
 * Renders a legal text object as a page with a title and series of sections.
 * (This implementation is a deeply imperfect temporary solution.)
 * @param text Object with the fields:
 * - title (string)
 * - lastUpdated (date)
 * - sections (list of section objects)
 * @returns 
 */
function LegalPage({ textObj }) {
    // Destructure.
    const { title, lastUpdated, sections } = textObj;

    // Wraps the whole document (but not the whole page).
    const wrapStyle = {
        width: "100%",
        maxWidth: "600px",
        alignItems: "flex-start",
    }

    // Style a header.
    const headerStyle = {
        width: "100%",
        margin: "10px 0px",
    }

    // Style a paragraph.
    const paraStyle = {
        width: "100%",
        textAlign: "left",
        marginBottom: "5px",
        fontSize: "14px",
    }

    // Style a section.
    const sectionStyle = {
        textAlign: "left",
        margin: "20px 0px",
    }

    // Style a link.
    const linkStyle = {
        fontWeight: "bolder",
        cursor: "pointer",
        fontSize: "14px",
        marginBottom: "5px",
    }

    /**
     * Formats a section object.
     * @param {*} sec Object with fields:
     * - head (string to render as headline)
     * - pars (list of strings to render as paragraphs)
     * - subSections (list of subsections consisting of a head, a list of pars,
     * and possibly a link, which would have a link and a linkText element)
     * - link (url to link to)
     * - linkText (text to show up for link of url)
     * @param {*} index Index of the section (to use as key)
     */
    const formatSection = (sec, index) => {
        return (
            <div key={index} style={sectionStyle}>
                {sec.head &&
                    <h3 style={headerStyle}>
                        {sec.head}
                    </h3>
                }
                {sec.pars?.map((p, i) => {
                    return (
                        <p key={i} style={paraStyle}>
                            {p}
                        </p>
                    )
                })}
                {sec.subSections?.map((s, i) => {
                    return (
                        <div className="col" key={i} style={wrapStyle}>
                            {s.head &&
                                <h5 style={headerStyle}>
                                    {s.head}
                                </h5>
                            }
                            {s.pars?.map((p, j) => {
                                return (
                                    <p key={j} style={paraStyle}>
                                        {p}
                                    </p>
                                )
                            })}
                            {s.link &&
                                <a href={s.link} style={linkStyle}>
                                    {s.linkText ? s.linkText : s.link}
                                </a>
                            }
                        </div>
                    )
                })}
                {sec.link &&
                    <a href={sec.link} style={linkStyle}>
                        {sec.linkText ? sec.linkText : sec.link}
                    </a>
                }
            </div>
        )
    }

    return (
        <PageWrap title={title}>
            {lastUpdated && <h3>Last Updated: {lastUpdated}</h3>}
            <div style={wrapStyle}>
                {sections.map((s, i) => formatSection(s, i))}
            </div>
        </PageWrap>
    )
}

export default LegalPage
