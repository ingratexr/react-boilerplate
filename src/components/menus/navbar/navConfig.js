/**
 * The list of links for the navbar/menu. Responsive based on whether there is
 * a current user signed in.
 */
export const config = (currentUser) => {
    return (
        [
            { link: "/", text: "Home" },
            { link: "/demo", text: "Demo" },
            { link: currentUser ? "/account" : null, text: "Account" },
            { link: currentUser ? null : "/create-account", text: "Create Account" },
            { link: currentUser ? null : "/sign-in", text: "Sign In" },
        ]
    )
}
