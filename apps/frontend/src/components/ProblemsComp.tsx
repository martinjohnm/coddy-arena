import { Link } from "react-router-dom"


export const ProblemsComp = () => {
    return <div className="mx-auto container max-w-5xl">
        <div className="">
            <p className="text-3xl py-4">Problems</p>
        </div>
        <div className="">
            <SingleProblem title="Two sum" id="464"/>
            <SingleProblem title="Add two numbers" id="af"/>
            <SingleProblem title="Palindrome number" id="dfd"/>
        </div>
    </div>
}


function SingleProblem({title, id} : {title : string, id : string}) {
    return <div className="py-2">
        <div className="w-full bg-slate-100 grid grid-cols-5 p-4 rounded-md">
            <div className="col-span-4">
                {title}
            </div>
            
            <div className="col-span-1 flex items-center justify-center">
                <Link to={`/problem/${id}`}>
                    <button className="bg-green-400 p-2 rounded-lg text-black hover:bg-green-500 shadow-md">Solve</button>
                </Link>
            </div>
        </div>
    </div> 
}