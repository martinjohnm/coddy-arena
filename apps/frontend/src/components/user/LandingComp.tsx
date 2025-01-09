

export const LandingComp = () => {
    

    return <div className="mx-auto container max-w-5xl">
        <div className="md:grid md:grid-cols-2 py-4 gap-2">
            <div className="flex justify-center items-center">
                <div className="w-80 h-96">
                    <img src="coding.jpeg" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="items-center justify-center  p-6">
                    
                    <div className="flex items-center justify-center">
                        <p className="text-4xl">A New Way to Learn</p>      
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-lg">Coddy is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>   
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <button className="bg-green-400 p-2 rounded-2xl">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}