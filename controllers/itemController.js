const { v4: uuidv4 } = require('uuid')
const items = require('../items')

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params
  const item = items.find((item) => item.id === id)
  reply.send(item)
}

const addItem = (req, reply) => {
  const { name } = req.body
  const item = { id: uuidv4(), name }
  items.push(item)
  reply.code(201).send(item)
}

const deleteItem = (req, reply) => {
  const { id } = req.params
  const i = items.findIndex((item) => item.id === id)
  items.splice(i + 1)
  reply.send({ message: `Item ${id} has been removed` })
}

const updateItem = (req, reply) => {
  const { id } = req.params
  const { name } = req.body
  const i = items.findIndex((item) => item.id === id)
  items[i].name = name
  reply.send(items[i])
}

module.exports = { getItem, getItems, addItem, deleteItem, updateItem }
