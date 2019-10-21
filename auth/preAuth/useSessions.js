
module.exports={
    name: 'X_(56?&&(#)_(#)+(U_#$)', // default is connect.sid
    secret: 'nobody tosses a dwarf!',//abstrat me out .env
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: true,
    saveUninitialized: false,
  }
  
  // USE IN ROUTER
  // const session = require("express-session");
  // router.use(session(sessionData));
  // router.get("/", (req, res) => {
  //   req.session.username = "Roman";
  //   console.log("session", req.session.name);
  //   res.send(req.session);
  // });
  
   
  