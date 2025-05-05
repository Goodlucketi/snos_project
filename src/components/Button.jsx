const button = ({text, type}) => {
    return ( 
        <div className="btn">
            <button type={type} className="p-2 rounded-md border-0 bg-blue-700 text-white">{text}</button>
        </div>
     );
}
 
export default button;