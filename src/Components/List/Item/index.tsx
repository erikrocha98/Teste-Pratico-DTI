export default function Item (props: {lembrete: string, data: string}){
    return(
        <li>
            <h3>{props.lembrete}</h3>
            <span>{props.data}</span>
        </li>
    )
}
