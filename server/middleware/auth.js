// import jwt from 'jsonwebtoken'

// const auth = (req, res, next) => {
//     try {
//         const token = req.headers.Authorization.split(' ')[1]
        
//         let decodeData = jwt.verify(token, 'test')
//           let decodeData = jwt.verify(token, process.env.JWT_SECRET)  deploy valhat nu
//         req.userId = decodeData?.id

//         next()
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default auth;