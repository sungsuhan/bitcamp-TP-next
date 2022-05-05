import axios from "axios"
import tableStyles from "../common/styles/table.module.css"
import { useEffect ,useState} from "react"

export default function BoardList(){
    const columns = ["제목", "작성자", "문의 내용"]
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/board-list').then(res=>{
            setData(res.data.boards)
        }).catch(err=>{})
    }, [])
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr><th colSpan={3}><h2>고객센터</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td key={column} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ? <tr >
                    <td colSpan={3} >게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.title}>
                            <td >{board.title}</td>
                            <td >{board.name}</td>
                            <td >{board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}