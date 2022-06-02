
const style = {
    padding:50,
    backgroundColor:'gray', 
    color:'white'
}

function Footer({footerText}){
    return (
        <footer style={style}>
            {footerText}
        </footer>
    )
}

export default Footer;