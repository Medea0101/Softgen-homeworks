
const style={
    backgroundColor:'#112945',
    color:'white',
    display: 'flex',
    fontSize: 34
}

function Header({title}){
    return (
        <header style={style}>
            <div>
                <img src="./logo192.png" alt="logo"></img>
            </div>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
        </header>
    )
}

export default Header;