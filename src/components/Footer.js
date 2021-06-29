function Footer(props) {
    return(
        <div className="footer-nav">

                <h4 className="footer-txt">Contact Me</h4>
            <div className="inner-wrapper">
                <p>Redmond, WA</p>
                <a href="mailto:cindyztran@gmail.com">cindyztran@gmail.com</a>
                <p>+1 444-444-4444</p>
                <div className="logos">
                    <a href="https://github.com/cindyztran">
                        <img alt='' src="https://img.icons8.com/ios/24/000000/github--v1.png"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cindyztran/">
                        <img src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png"/>
                    </a>
                </div>
            </div>

        </div>
    );
}
export default Footer;