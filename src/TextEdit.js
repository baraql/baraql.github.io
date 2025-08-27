
function TextEdit() {
    return (
        <div className="textedit-wrapper code-font">
            <div className="flex-row-container top-console-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="textedit-content" style={{ marginLeft: "5px" }}>
                <p>/*</p>
                <p>* ETH Zürich MSc student</p>
                <p>* Machine Learning & CS </p>
                <p>* NYU Alum, Summa Cum Laude </p>
                <p>
                    *{" "}
                    <a
                        className="link"
                        href="mailto:baraq.lipshitz@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        baraq.lipshitz@gmail.com
                    </a>
                </p>
                <p>
                    *{" "}
                    <a
                        className="link"
                        href="https://linkedin.com/in/baraq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/baraq
                    </a>
                </p>
                <p>
                    *{" "}
                    <a
                        className="link"
                        href="https://github.com/baraql"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/baraql
                    </a>
                </p>
                <p>*/</p>
            </div>
        </div>
    )
}
export default TextEdit;