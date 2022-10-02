export default function UserResume({name, tag, role, reverse}){
    return (
        <div className={`flex ${reverse? 'flex-row-reverse' : 'flex-row'}  h-screen w-full items-center`}>
            <div>
                <img src={`/images/users/${tag}.jpg`} width={400} className="rounded-full"/>
            </div>
            <div className="mx-auto">
                <h3 className="text-4xl font-semibold">{name}</h3>
                <span className="text-xl">{role}</span>
            </div>
        </div>
    );
}