export default function Heading({ children }: {children:string}){
    return(
        <div style={{
            width:'100%',
            textAlign:"center",
            padding:"2rem 0"
        }}>
            <h1 style={{
            color: 'var(--darkBlue)',
            fontSize: 42,
            fontWeight: 800
        }}>
            {children}
        </h1>
        </div>
    );
};