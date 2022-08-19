import './Header.css';
const appName =`NoteApp`;
const admminName= `MaklonFR`;
const Header = () =>  {
    return (
    <div className="header">
        <h3 className="appname">
            {appName}
        </h3>
        <div className="user-settings">
            <img 
                className="user-profile" 
                src="https://avatars.githubusercontent.com/u/88584119?v=4" 
                alt="" 
            />
            <p className="user-name">{admminName}</p>
            </div>
    </div>
  )
}

export default Header;
