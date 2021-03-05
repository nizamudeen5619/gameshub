const Standup = require("../../models/standup");
const multer = require("multer");
module.exports = function (router) {
  router.get("/product", function (req, res) {
    Standup.find({}, (err, standup) => {
      if (err) {
        res.json({ sucess: false, message: err });
      } else {
        if (!standup) {
          res.json({ sucess: false, message: "No standup found" });
        } else {
          res.json({ sucess: true, standup: standup });
        }
      }
    });
  });


  router.post("/product", function (req, res) {
    let note = new Standup(req.body);
    note.save(function (err, note) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(note);
    });
  });

  router.put("/updateproduct", (req, res) => {
    if (!req.body._id) {
      res.json({ sucess: false, message: "No standup id provided" });
    } else {
      Standup.findOne({ _id: req.body._id }, (err, standup) => {
        if (err) {
          res.json({ sucess: false, message: "No standup id provided" });
        } else {
          standup.ProductName = req.body.ProductName;
          standup.Productategory = req.body.Productategory;
          standup.ProductDesc = req.body.ProductDesc;
          standup.ProductPrice = req.body.ProductPrice;
          standup.ProductImage = req.body.ProductImage;

          standup.save((err) => {
            if (err) {
              res.json({ sucess: false, message: err });
            } else {
              res.json({ sucess: true, message: "Standup updates!" });
            }
          });
        }
      });
    }
  });

  router.delete("/deleteproduct/:id", (req, res) => {
    if (!req.params.id) {
      res.json({ sucess: false, message: "No id Provided" });
    } else {
      Standup.findOne({ _id: req.params.id }, (err, standup) => {
        if (err || !standup) {
          res.json({ sucess: false, message: "Invalid Id" });
        } else {
          standup.remove((err) => {
            if (err) {
              res.json({ sucess: false, message: err });
            } else {
              res.json({ sucess: true, message: "Standup deleted!" });
            }
          });
        }
      });
    }
  });
  router.get("/product/:id", (req,res) =>{
    if(!req.params.id){
      res.json({success: false, message:"No id provided"});

    }else{
      Standup.findOne({_id: req.params.id},(err,standup) =>{
        if(err || !standup){
          res.json({success: false, message:"Invalid id"});
        }else{
          res.json({success:true,standup:standup});
        }
      });
    }
  });
  router.get("/category/:category", (req, res) => {
    if (!req.params.category) {
      res.json({ sucess: false, message: "No id Provided" });
    } else {
      Standup.find({ ProductCategory: req.params.category }, (err, standup) => {
        if (err || !standup) {
          res.json({ sucess: false, message: "Invalid Id" });
        } else {
          res.json({ sucess: true, standup: standup });
        }
      });
    }
  });

  var storage = multer.diskStorage ({
    destination : function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb){
      cb(null, file.originalname);
    },
  });
  var upload = multer({ storage: storage});
  router.post("/upload", upload.array("uploads[]",12), function (req, res) {
    console.log("files", req.files);
    res.json(req.files);
  })
};