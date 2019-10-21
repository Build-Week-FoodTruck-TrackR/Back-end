const router = require("express").Router();
const dbModel = require("./portalModel");



//LOGIN
router.post("/login", (req, res) => {
  const u = req.body;
  dbModel.findByUserName(u).then(u => {
    res.status(200).json({ messag: "success", ...u });
  })
});

router.post("/register", (req, res) => {
  const u = req.body
  dbModel
    .addUser(u)
    .then(u => {
      res.status(200).json({ messag: "success", ...u });
    }).catch(err =>res.json({message:`Sorry, User,${u.username},Already Exists`}))
});


//DOCS
router.get("/?*", (req, res, next) => {
  res.status(200).json(shape) 
});

const shape = {
  register:{
    method: "POST",
    Authenticated: true,
    Role: "*",
    url: "/api/register/",
    req: {
      
      body: {
        username: {
          type: "string",
          unique: true,
          required: true,
          min: 5,
          max: 50
        },
        password: {
          type: "string",
          min: 8,
          max: 50
        },
        email: {
          unique: true,
          min: 8,
          max: 50
        }
      }
    }
  },
  login:{
    method: "POST",
    action: "login",
    Authenticated: false,
    Role: "*",
    url: "/api/login/",
    req: {
      body: {
        username: {
          type: "string",
          unique: true,
          required: true,
          min: 5,
          max: 50
        },
        password: {
          type: "string",
          min: 8,
          max: 50
        },
        email: {
          unique: true,
          min: 8,
          max: 50
        }
      }
    }
  },
  forgot:{
    method: "POST",
    action: "forgot",
    Authenticated: false,
    Role: "*",
    url: `/api/forgot/`,
    req: {
      body: {
        email: {
          required: true,
          min: 8,
          max: 50
        }
      }
    }
  }
};

module.exports = router;
