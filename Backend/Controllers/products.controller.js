const { productCollection } = require('../Models');

const create_products = (req, res) => {
    const newProduct = new productCollection({ ...req.body });

    try {
        newProduct.save();
        res.send({ success: true, message: 'product added successfully' })
    }
    catch (error) {
        res.send({ success: true, message: error.message })
    }
}


module.exports = {
    create_products
}