import { useIterator } from "hooks/useIterator";
import { useEffect } from "react";

export default function RepoItem({repositories, onSelect = (f) => f}) {
 

    const {item, prev, next} = useIterator(repositories);

    useEffect(()=>{
        if(!item) return;
        onSelect(item);
    }, [item]);

    if(!repositories || repositories.length === 0)
    return <></>;

    return (<div style={{display: "flex"}}>
        <button onClick={prev}>&lt;</button>
        <p>{item.name}</p>
        <button onClick={next}>&gt;</button>
    </div>
    );
}