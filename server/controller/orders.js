

var pool = require('../db/db');

module.exports = {
    async getOrders(req, res) {

        //query
        order_list_query = "select date(om.order_date) as date,";
        order_list_query += "concat(concat(u.first_name,' ' ), u.last_name) as 'name', ";
        order_list_query += "od.`orderId`, ";
        order_list_query += "p.product_name, ";
        order_list_query += "od.qty as Quentity ";
        order_list_query += "from order_detail od  ";
        order_list_query += "inner join `user` as u ";
        order_list_query += "on od.`userId` =  u.`userId` ";
        order_list_query += "inner join order_master as om ";
        order_list_query += "on od.`orderId` = om.`orderId` ";
        order_list_query += "inner join product as p ";
        order_list_query += "on p.`productId` = od.`productId` ";

        //execution of the query
        await pool.query(order_list_query)
            .then(row => {
                res.json(row);
            })
            .catch(err => {
                console.log('getOrders QUERY ERR :' + err);
                res.end();
            });
    },
    async orderDetailse(req, res) {

        //query
        order_detailse_query = "select concat(concat(u.first_name, ' '), u.last_name) as 'user_name', ";
        order_detailse_query += "u.phone, ";
        order_detailse_query += "u.email, ";
        order_detailse_query += "od.orderId, ";
        order_detailse_query += "om.order_date, ";
        order_detailse_query += "p.product_name, ";
        order_detailse_query += "om.order_status, ";
        order_detailse_query += "om.order_amt, ";
        order_detailse_query += "od.qty as quantity, ";
        order_detailse_query += "om.shippingcost, ";
        order_detailse_query += "om.packagingfee, ";
        order_detailse_query += "om.order_discount, ";
        order_detailse_query += "om.order_grand_total ,";
        order_detailse_query += "om.payment_status ";
        order_detailse_query += "from order_detail od  ";
        order_detailse_query += "inner join order_master om ";
        order_detailse_query += "on od.`orderId` = om.`orderId` ";
        order_detailse_query += "inner join `user` u ";
        order_detailse_query += "on om.`userId` = u.`userId` ";
        order_detailse_query += "inner join product p ";
        order_detailse_query += "on p.`productId` = od.`productId` ";
        order_detailse_query += "where om.`orderId` = ? ";

        //execution of the query
        await pool.query(order_detailse_query, [req.params.id])
            .then(row => {
                res.json(row);
            })
            .catch(err => {
                console.log("odderDetailse QUERY ERR :", err);
                res.end();
            });
    }
}