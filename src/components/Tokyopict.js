import './Tokyopict.css';

function Tokyopict(props){
    const {Tokyo} = props;
    return(
        <div className="Tokyopict">
            <div className="Tokyobg" />
            <div className="Tokyocontent">
                    <img src={Tokyo.pictureurl} />
                    <p>{Tokyo.title}</p>
            </div>
        </div>

    );
}
export default Tokyopict;