var express = require('express');
var routes = express.Router();

var tb_thanhtoanCtrl = require('../../controllers/API/thanhtoan.Api');

routes.get('/getidthanhtoan/:id',tb_thanhtoanCtrl.getidthanhtoan);

routes.post('/Addthanhtoan',tb_thanhtoanCtrl.Addthanhtoan);

routes.get('/getidaddress/:id',tb_thanhtoanCtrl.getiduseraddress);

routes.post('/Add_address',tb_thanhtoanCtrl.Add_address);

module.exports = routes;