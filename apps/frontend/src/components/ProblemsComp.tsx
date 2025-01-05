

export const ProblemsComp = () => {
    return <div className="mx-auto container max-w-5xl">
        <div className="">
            <p className="text-3xl py-4">Problems</p>
        </div>
        <div className="">
            <SingleProblem title="Two sum"/>
            <SingleProblem title="Add two numbers"/>
            <SingleProblem title="Palindrome number"/>
        </div>
    </div>
}


function SingleProblem({title} : {title : string}) {
    return <div className="py-2">
        <div className="w-full bg-slate-100 grid grid-cols-5 p-4 rounded-md">
            <div className="col-span-4">
                {title}
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <button className="bg-green-400 p-2 rounded-lg text-black hover:bg-green-500 shadow-md">Solve</button>
            </div>
        </div>
    </div> 
}