import "../../WebsiteStyles/Layout/Header.css"

function Header() {
    return (
        <div className="Header">
            <h1>Logo</h1>

            <div className="Navigations">
                <a href="/">Home</a>
                <a href="/categories">Categories</a>
                <a href="/about-us">About</a>
            </div>
        </div>
    )
}

export default Header