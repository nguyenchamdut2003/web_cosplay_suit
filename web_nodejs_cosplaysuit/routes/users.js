var express = require('express');
var router = express.Router();
var tb_userCtrl = require('../controllers/user.controller');
var tb_productCtrl = require('../controllers/product.controller');
var check_login = require('../middlewares/check_login');
router.use((req, res, next) => {
    console.log('middleware');
    next();
});



router.get('/', tb_userCtrl.loginWeb);
router.post('/', tb_userCtrl.loginWeb);
router.get('/signup', tb_userCtrl.dangky);
router.post('/signup', tb_userCtrl.dangky);


router.get('/forgotPass', tb_userCtrl.forgotPass);
router.post('/forgotPass', tb_userCtrl.forgotPass);

router.get('/forgotPass/otpcheck', check_login.yeu_cau_otp, tb_userCtrl.otpcheck);
router.post('/forgotPass/otpcheck', check_login.yeu_cau_otp, tb_userCtrl.otpcheck);

router.get('/forgotPass/otpcheck/passwdnew', check_login.yeu_cau_otp, tb_userCtrl.passNew);
router.post('/forgotPass/otpcheck/passwdnew', check_login.yeu_cau_otp, tb_userCtrl.passNew);

router.get('/account/newpass', check_login.yeu_cau_login, tb_userCtrl.newpass);
router.post('/account/newpass', check_login.yeu_cau_login, tb_userCtrl.newpass);

router.get('/account', check_login.yeu_cau_login, tb_userCtrl.account);
router.post('/account', check_login.yeu_cau_login, tb_userCtrl.account);

router.get('/home', check_login.yeu_cau_login, tb_productCtrl.getProduct);
router.post('/home', check_login.yeu_cau_login, tb_productCtrl.getProduct);
router.get('/home/quanlykhachhang', check_login.yeu_cau_login, tb_productCtrl.quanlyKH);
router.post('/home/quanlykhachhang', check_login.yeu_cau_login, tb_productCtrl.quanlyKH)

router.get('/home/quanlykhachhang/:id', check_login.yeu_cau_login, tb_productCtrl.deleteKHbyID);
router.delete('/home/quanlykhachhang/:id', check_login.yeu_cau_login, tb_productCtrl.deleteKHbyID);
module.exports = router;
