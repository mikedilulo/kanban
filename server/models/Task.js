import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema({
  content: { type: String },
  authorId: { type: ObjectId, ref: "User", required: true },
  taskId: { type: ObjectId, ref: "Task", required: true }
});
const Task = new Schema(
  {
    description: { type: String, required: true },
    authorId: { type: ObjectId, ref: "User", required: true },
    boardId: { type: ObjectId, ref: "Board", required: true },
    listId: { type: ObjectId, ref: "List", required: true },
    comments: [commentSchema]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

//CASCADE ON DELETE
Task.pre("deleteMany", function(next) {
  //lets find all the lists and remove them
  Promise.all([
    //_taskService.deleteMany({ listId: this._conditions_id }),
  ])
    .then(() => next())
    .catch(err => next(err));
});

//CASCADE ON DELETE
Task.pre("findOneAndRemove", function(next) {
  //lets find all the lists and remove them
  Promise.all([
    // _taskRepo.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err));
});

export default Task;
