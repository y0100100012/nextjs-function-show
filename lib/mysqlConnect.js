import mysql from 'mysql'

function getConnetion () {
  let connection = mysql.createConnection({
    host     : '10.45.26.99',
    user     : 'root',
    password : 'iwhaleCloud@2018',
    database : 'event_handle'
  });
  
  connection.connect();
  return connection;
}

export function queryLayer() {
  let promise = new Promise((resolve, reject) => {
    let connection = getConnetion();
    let sql = `
      SELECT
        layer_code AS layerCode,
        layer_name AS layerName
      FROM
        adm_eh_bas_gis_layer_stat
      LIMIT 5
    `;
    connection.query(sql,(error, results, fields)=>{
      if (error) {
        reject(error);
      };
      let layerList = results.map(item => ({layerCode: item.layerCode, layerName: item.layerName }));
      resolve(layerList,fields);
    })
  });
  return promise;
}