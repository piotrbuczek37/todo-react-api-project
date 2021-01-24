var express = require('express');
var firebaseConfig = require("../firebase");
var router = express.Router();

router.get("/", function(req, res, next) {
    firebaseConfig
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'VxlMQPQHEI')
        .get()
        .then(snapshot => {
            const allTasks = snapshot.docs.map(task => ({
                ...task.data()
            }));
            res.send(allTasks);
        })
});

router.post("/", function(req, res, next) {
    console.log(req.body);
    const projectId = req.body.projectId;
    const task = req.body.task;
    const taskDate = req.body.taskDate;
    const collatedDate = req.body.collatedDate;
    firebaseConfig
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: 'VxlMQPQHEI',
        }).then(() => {
            res.send("Added task");
        });
});

router.put("/", function(req, res, next) {
    const id = req.body.id;
    firebaseConfig.firestore().collection('tasks').doc(id).update({
      archived: req.body.archived,
    }).then(() => {
        res.send("Updated");
    });
})

module.exports = router;