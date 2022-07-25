import { json } from "stream/consumers";

export default function hello(req, res) {
  let msg = "test";
  if (req.method === 'POST') {
    let tmp = msg;
    msg = JSON.parse(JSON.stringify(req.body))
    return { old: tmp, new: msg};
  }
  else if(req.method === 'GET'){
    res.status(200).json({ message: 'Hello!' })
  }
  else {
      return res.status(405).json({ message: 'Method not allowed', success: false });
  }
    
  }