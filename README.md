# React Boilerplate
This is a collection of React components I've reused in various projects.
It's also a folder structure that I like and reuse.

These components can be dropped as-is into a new React project, but generally I
use them as a starting point to be remixed into something customized for
whatever I'm doing. So this isn't really a library of React components so much
as a collection of sketches that I can flesh out in different ways.

If you can use anything here, go nuts. If you see a way to improve something,
great, let me know.

## See It in Action
This repo is both a collection of React components and a React app itself. You
can see the React app (which demos as many of the components as I've 
remembered to include/keep up to date) at github.io/ingratexr/react-boilerplate

## About the Styling
There is a global.css file in the main src folder that has some global styling
and classes that I use throughout many apps, but most of the styling for most
components is done inline with style objects in the JSX.

At the risk of inciting a mob of angry villagers screaming "SEPARATION OF 
CONCERNS!" while they set up a guillotine in my front yard, this is better because:

* I can copy a single file from here into whatever other project and it will work 
immediately, with the styling easy to change (or factor out).
* Much of the styling is reponsive and so I would do it inline anyway.
* It's often easier to maintain or refactor inline styled components (the
tradeoff, though, is that they can be harder to extend).

In other words: this is a choice, not a mistake.

## Dependencies
See the package.json file for the complete list, but two to mention:

### Firebase
This isn't a dependency exactly but some stuff like the AuthContext mentions
Firebase.

I like Firebase and have used it in many projects. It lets me
get something up and running with any combination of hosting,
authentication, a document-based database, a serverless back end, and other
stuff, very quickly, with basically zero work. There's also a generous free
tier.

There are tradeoffs, obviously, but I treat "basically zero work" and "free" as
major entries in any list of pros.

### Material UI
I have used and liked some Material UI components, but I don't like the look or 
feel of Material enough to use it exclusively or super pervasively. (No offense,
Google.)
