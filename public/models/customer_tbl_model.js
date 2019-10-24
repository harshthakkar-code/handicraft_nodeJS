var db = require('../dbconnection');
var customer = {
    getAllCustomer: function (callback) {
        return db.query("select * from customer_tb", callback);
    },
    getCustomerByEmail: function (email, callback) {
        return db.query("select * from customer_tb where email=?", email, callback);
    },
    addCustomer: function (item, callback) {
        return db.query("insert into customer_tb values(?,?,?,?,?,?)", [item.email, item.cust_name, item.ph_no, item.address, item.state, item.pincode], callback);
    },
    deleteCustomer: function (email, callback) {
        return db.query("delete from customer_tb where email=?", [email], callback);
    },
    updateCustomer: function (email, item, callback) {
        return db.query("update customer_tb set cust_name=?,pincode=?,state=?,address=?,ph_no=? where email=?", [item.cust_name, item.pincode, item.state, item.address, item.ph_no, email], callback);
    }
}
module.exports = customer;