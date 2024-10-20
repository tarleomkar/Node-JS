const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/Person");

// passport.use(new LocalStrategy(async (username, password, done) => {
//     // authentication logic here
//     try {
//       // console.log("Received credentials: ", username, password);
//       // Find the user by username
//       const user = await Person.findOne({ username });
//       if (!user) {
//          return done(null, false, { message: "Incorrect username." });
//       }

//       // const isPasswordMatch = user.password === password ? true : false;
//       // using bcrypt this time

//       const isPasswordMatch = await user.comparePassword(password);
//       if (isPasswordMatch) 
//         return done(null, user);
//       else 
//         return done(null, false, { message: "Incorrect password." });
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// In your passport strategy
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
      const user = await Person.findOne({ username });
      if (!user) {
          return done(null, false, { message: "Incorrect username." });
      }

      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
          return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
  } catch (error) {
      return done(error);
  }
}));


module.exports = passport; // Export configured passport