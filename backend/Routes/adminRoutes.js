const express = require('express')
const adminRoutes = express()
adminRoutes.use(express.json())

const { RegisterAccountModel } = require('../models/register')
const { ProductsModel } = require('../models/products_model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


adminRoutes.post('/login', async (req, res) => {
    const { email, password } = req.body
    const auth = await RegisterAccountModel.find({ email })
    if (auth.length > 0) {
        try {
            bcrypt.compare(password, auth[0].password, (err, secure_password) => {
                if (err) {
                    console.log("Wrong Credential")
                    res.send("Wrong Credential")
                } else {
                    try {
                        const token = jwt.sign({ login: "successfull" }, 'authentication')
                        console.log("token", token)
                        const details = auth[0]
                        res.send({ token, details })
                    } catch (err) {
                        res.send("error while generating token!")
                        console.log("error while generating token!")
                    }
                }
            })
        } catch (err) {
            res.send(err)
            console.log(err)
        }
    } else {
        res.send("Wrong Email")
        console.log("Wrong Email")
    }
})

adminRoutes.post('/register', (req, res) => {
    const { name, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, secure_password) => {
            if (err) {
                console.log("Admin Register hashing", err)
                res.send(err)
            } else {
                const register = new RegisterAccountModel({ name, email, password: secure_password })
                await register.save()
                console.log("Admin Register")
                res.send(register)
            }
        })
    } catch (err) {
        res.send("Error Admin Registration")
    }
})

// CRUD (get,post ,patch, delete)

adminRoutes.get('/', async (req, res) => {
    try {
        let products = await ProductsModel.find()
        res.send(products)
        console.log(products)
    } catch (err) {
        console.log("Error while getting products data", err)
        res.send("Error while getting products data", err)
    }
})

adminRoutes.post('/add', async (req, res) => {
    try {
        let products = new ProductsModel(req.body)
        products.save()
        res.send(products)
        console.log(products)
    } catch (err) {
        console.log("Error while adding products data", err)
        res.send("Error while adding products data", err)
    }
})

adminRoutes.patch('/update/:_id', async (req, res) => {

    const updated_data = req.body
    const _id = req.params._id

    try {

        await ProductsModel.findByIdAndUpdate({ _id }, updated_data)
        res.send(`Data Updated SuccessFull`)
        console.log(`Data Updated SuccessFull`)

    } catch (err) {
        res.send(`Error while Updating: ${err}`)
        console.log(`Error while Updating: ${err}`)
    }
})


adminRoutes.delete('/delete/:_id', async (req, res) => {
    const _id = req.params._id
    try {
        await ProductsModel.findByIdAndDelete({ _id })
        console.log(`Data Deleted!`)
        res.send(`Data Deleted!`)
    } catch (err) {
        console.log(`Error while Deleting products: ${err}`)
        res.send(`Error while Deleting products: ${err}`)
    }
})


module.exports = { adminRoutes }