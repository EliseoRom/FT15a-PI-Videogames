// import axios from 'axios';

// export const  CreateGame = () => {
//     const dispatch = useDispatch()
//     const getGenres = useSelector(state => state.gamesGenres);
//     const [error, setError] = useState({})
//     const [alert, setAlert] = useState({error: false, create:false})
//     const [typePlatform, setTypePlatform] = useState([]);
//     const [typeGenre, setTypeGenre] = useState([]);
//     const [input , setInput] = useState({
//         name : '',
//         description : '',
//         released : '',
//         rating : '',
//         image : imgDefault,
//         genre:'',
//         genres: [],
//         platforms:[],
//     })
//     const plataformas= [
//         {
//             platform:{
//                 id:1,
//                 name:'PC'
//             }
//         },
//         {
//             platform:{
//                 id:2,
//                 name:'Apple MacIntosh'
//             }
//         },
//         {
//             platform:{
//                 id:3,
//                 name:'Xbox'
//             }
//         },
//         {
//             platform:{
//                 id:4,
//                 name:'Nintendo'
//             }
//         },
//         {
//             platform:{
//                 id:5,
//                 name:'PlayStation'
//             }
//         },
//         {
//             platform:{
//                 id:6,
//                 name:'Linux'
//             }
//         }
//     ];