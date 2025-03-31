import SkeletonCard from "../components/loading/SkeletonCard";

export default function loading (){
    return(
        <main>
            <div className="grid grid-cols-3 gap-8">
            {"abcdefghi".split('').map(i =>(
                <SkeletonCard key={i} />
            ))}
        </div>
        </main>
    )
}