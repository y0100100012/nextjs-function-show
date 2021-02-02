// API Routes 演示
// 可通过 http://localhost:3001/api/addNum?a=12&b=24 调用本演示接口
// 以下代码运行在node服务器端
export default (req, res) => {
  if(!req.query.a || !req.query.b){
    res.status(500).json({ error: true, data: null });
  }
  let result = Number(req.query.a) + Number(req.query.b);
  res.status(200).json({ error: true, data: result });
}