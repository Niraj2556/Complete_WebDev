export default function handler(req, res){
    // res.status(200).json({name: 'Neeraj Aaloo'})
    const { name } = req.query
    res.status(200).json({ message: `Hello ${name}` })


    const names = req.query;
    res.status(200).json({message: `Hello I am coming from const ${names}`})


    const { username, password } = req.body;
    res.status(200).json({ message: 'Login successful' })





    switch (req.method) {
        case 'GET':
          // handle GET request
          res.status(200).json({ message: 'This is a GET request' })
          break
        case 'POST':
          // handle POST request
          res.status(200).json({ message: 'This is a POST request' })
          break
        default:
          res.status(405).end() // method not allowed
          break
      }
}