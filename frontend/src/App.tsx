import api from '../utils/axios.js'
import { auth, googleProvider } from '../utils/firebase.ts'
import { signInWithPopup } from 'firebase/auth'

const App = () => {

   const handlelogin = async(token:any)=>{

   try {
       const {data} = await api.post("/auth/login", token)
       console.log(data)
   } catch (error) {
    
   }

   }


  const googleLogin= async () => {
    const data =  await signInWithPopup(auth, googleProvider)
    const token = data.user.getIdToken()
    console.log(token)
    await handlelogin(token)
  }
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={googleLogin}>
        Click me
      </button>
    </div>
  )
}

export default App