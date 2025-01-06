import { Link } from "react-router-dom";
import { CodeEditorComp } from "../components/CodeEditorComp";
import { ProblemStatementComp } from "../components/ProblemStatementComp";




export const Problem = () => {
    return <div>
        <div className="grid grid-cols-3 px-4 items-center justify-center h-10">
            <div className="col-span-1 bg-slate-600 justify-start items-center flex px-4">
                <Link to="/">
                    <div className="w-6 h-6">
                        <img src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className="col-span-1 bg-slate-600 flex items-center justify-center px-4">
                <div>
                    hai
                </div>
            </div>
            <div className="col-span-1 bg-slate-600 flex justify-end px-4">
                <div>
                    hai
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4">
            <div className="col-span-1 h-screen bg-red-300">
                <ProblemStatementComp title="Two sum" description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                    You may assume that each input would have exactly one solution, and you may not use the same element twice.
                    You can return the answer in any order." id="dfasd"/>
        
            </div>
            <div className="col-span-2 h-screen bg-green-200">
                <CodeEditorComp/>
            </div>
        </div>
    </div>
}