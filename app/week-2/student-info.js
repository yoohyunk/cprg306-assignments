import Link from "next/link";

export function StudentInfo() {
    return (

        <div className="flex flex-col gap-2 text-sm">   
        
            <div>Yoohyun Kim</div>
            <Link href="https://github.com/yoohyunk" className="text-violet-200 hover:text-violet-600 active:text-violet-700">click go to github</Link>
        </div>     

       
    );


}