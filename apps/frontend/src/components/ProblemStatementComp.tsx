
interface ProblemStatementType {
    title : string;
    id : string
    description : string
}

export const ProblemStatementComp = ({title, id, description} : ProblemStatementType) => {
    return <div className="p-2">
        <div className="grid grid-cols-3 rounded py-2">
            <div className="col-span-1 flex justify-start items-center">
                description
            </div>
            <div className="col-span-1 flex justify-start items-center">
                solutions
            </div>
            <div className="col-span-1 flex justify-start items-center">
                submissions
            </div>
        </div>
        <div className="py-4">
            <p className="text-3xl">{title}</p>
        </div>
        <div className="py-4">
            <p>{description}</p>
        </div>
    </div>
}