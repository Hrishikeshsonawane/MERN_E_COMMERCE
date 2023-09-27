const { userCollection } = require('./../Models');

const findUser = async (req, res) => {
  return await userCollection.findOne({ email: req.body.email });
}
const findUserWithUserId = async (req, res) => {
  return await userCollection.findOne({ _id: req.userId })
}

const deleteTaskIdfromTaskArray = async (req, res) => {
  const taskIdToRemove = req.params.taskId;
  const userId = req.userId;
  return await userCollection.findOneAndUpdate(
    { _id: userId },
    { $pull: { tasks: taskIdToRemove } },
    { new: true }
  )
}
module.exports = {
  findUser,
  findUserWithUserId,
  deleteTaskIdfromTaskArray
}