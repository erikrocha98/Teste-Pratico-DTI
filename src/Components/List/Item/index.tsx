export default function Item (props: {lembrete: string, data: string}){
    return(
        <li>
            <span>{props.data}</span>
            <h3>{props.lembrete}</h3>
        </li>
    )
}
