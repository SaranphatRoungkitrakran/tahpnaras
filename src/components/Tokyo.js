import './Tokyo.css';

function Tokyo(props){
    const {Tokyotou , OnTokyoopen} = props;
    return(
        <div className='tokyo'>
                    <img src={Tokyotou.pictureurl} onClick={()=> {OnTokyoopen(Tokyotou)}} />
                    <p>{Tokyotou.title}</p>
        </div>

    );
}
export default Tokyo;