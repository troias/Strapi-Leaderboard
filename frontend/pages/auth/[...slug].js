import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

 const AuthDetails = () => {
    const [status, setStatus] = useState('')
    const router = useRouter()

    const {query} = router

    console.log("Token", query.id_token)
     
    useEffect(() => {
        if (query.id_token) {
            const token = query.id_token
            localStorage.setItem('token', token)
            setStatus('Successfully logged in with Google')
            const timer = setTimeout(() => {
                router.push('/')
            }, 3000)
            return () => clearTimeout(timer)
        } else if (!query.id_token) {
            localStorage.removeItem('token')
            const timer = setTimeout(() => {
                router.push('/')
            }, 3000)
            return () => clearTimeout(timer)
        }
                
                
        
    }, [query.id_token])

                
                

        
        

   

    return (
        <div>
            {status}
        </div>
    )
}

// export const getStaticProps = async (ctx) => {
//     const { slug } = ctx.params
//     console.log("slug", slug)
//     return {
//         props: {
//             title: 'Auth'
//         }
//     }
// }
export default AuthDetails