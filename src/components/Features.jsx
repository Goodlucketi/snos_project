const Features = ({title, text}) => {
    return ( 
        <main>
            <div className="feature p-6 h-48 shadow-md rounded-md bg-white">
                <h3 className="font-bold text-lg text-blue-700 mb-1">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </main>
     );
}
 
export default Features;