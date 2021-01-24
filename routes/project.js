var express = require('express');
var firebaseConfig = require("../firebase");
var router = express.Router();

router.get("/", function(req, res, next) {
    firebaseConfig.firestore()
        .collection('projects')
        .where('userId', '==', 'VxlMQPQHEI')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                        ...project.data(),
                        docId: project.id
                    }));
            res.send(allProjects);
        });
})

router.post("/", function(req, res, next) {
    const projectId = req.body.projectId;
    const projectName = req.body.projectName;
    firebaseConfig
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'VxlMQPQHEI',
      }).then(() => {
        res.send("Added project");
      })
})

router.delete("/:id", function(req, res, next) {
    const docId = req.params.id;
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
          res.send("Deleted project");
      });
})

module.exports = router;