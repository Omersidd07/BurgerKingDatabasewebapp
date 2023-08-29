const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require("mysql");

//ADJUST QUERY SO THAT IT WILL ONLY ADD ITEMS INTO DATABASE HTAT FIR WITHIN RESTRICTIONS?
//ADJUST USER INFO

let currentUsername = "";



const db = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'Osidd123',
    database: 'borgirkingthefifth',
    multipleStatements: true,

});

//grabs from front end
app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({extended: true}));


//Registers login information when user is registered


app.post("/api/insert", (req, res) => {
    
    //grabs from front end
    const Username = req.body.Username;
    const Password = req.body.Password;
    //const Customer_Id = req.body.Customer_Id;
    const CustomerName = req.body.CustomerName;
    const Gender = req.body.Gender;
    const Age = req.body.Age;
    
    
    let sqlInsert = 
    'INSERT INTO login (Username, Password) VALUES (?, ?);';
    db.query(sqlInsert, [Username, Password], (err, result) => {
        console.log(result);


    });


});

//INSERTS DEFAULT USER INFO THAT CAN BE EDITED LATER ON (WILL ADD THIS FUNCTIONALITY LATER)

app.post("/api/insertCust", (req, res) => {
    
    //grabs from front end
    const Username = req.body.Username;
    //const Password = req.body.Password;
    //const Customer_Id = req.body.Customer_Id;
    const CustomerName = req.body.CustomerName;
    const Gender = req.body.Gender;
    const Age = req.body.Age;
    

    let sqlInsertCustomer = 'INSERT INTO customer (Username, CustomerName, Gender, Age) VALUES (?,?,?,?);';
    db.query(sqlInsertCustomer, [Username, CustomerName, Gender, Age], (err, result) => {
        console.log(result);
    });
    

});

//INSERTS A DEFAULT SET OF RESTRICTIONS WHEN THE USER REGISTERS


app.post("/api/insertDefaultRestrictions", (req, res) => {
    
    const Customer_Id = req.body.Customer_Id;
    const minAmountCalories = req.body.minAmountCalories;
    const minAmountFat = req.body.minAmountFat;
    const minAmountSaturatedFat = req.body.minAmountSaturatedFat;
    const minAmountTransFat = req.body.minAmountTransFat;
    const minAmountCholesterol = req.body.minAmountCholesterol;
    const minAmountSodium = req.body.minAmountSodium;
    const minAmountCarbs = req.body.minAmountCarbs;
    const minAmountFiber = req.body.minAmountFiber;
    const minAmountSugar = req.body.minAmountSugar;
    const minAmountProtein = req.body.minAmountProtein;
    const minAmountWeightWatchersPoints = req.body.minAmountWeightWatchersPoints;
    const maxAmountCalories = req.body.maxAmountCalories;
    const maxAmountFat = req.body.maxAmountFat;
    const maxAmountSaturatedFat = req.body.maxAmountSaturatedFat;
    const maxAmountTransFat = req.body.maxAmountTransFat;
    const maxAmountCholesterol = req.body.maxAmountCholesterol;
    const maxAmountSodium = req.body.maxAmountSodium;
    const maxAmountCarbs = req.body.maxAmountCarbs;
    const maxAmountFiber = req.body.maxAmountFiber;
    const maxAmountSugar = req.body.maxAmountSugar;
    const maxAmountProtein = req.body.maxAmountProtein;
    const maxAmountWeightWatchersPoints = req.body.maxAmountWeightWatchersPoints;
    
    
    let sqlInsertRes = 'INSERT INTO restrictions (Customer_Id, minAmountCalories, minAmountFat, minAmountSaturatedFat, minAmountTransFat, minAmountCholesterol, minAmountSodium, minAmountCarbs, minAmountFiber, minAmountSugar, minAmountProtein, minAmountWeightWatchersPoints, maxAmountCalories, maxAmountFat, maxAmountSaturatedFat, maxAmountTransFat, maxAmountCholesterol, maxAmountSodium, maxAmountCarbs, maxAmountFiber, maxAmountSugar, maxAmountProtein, maxAmountWeightWatchersPoints) SELECT MAX(Customer_Id), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0), COALESCE(?, 0) FROM customer;';

    db.query(sqlInsertRes, [Customer_Id, minAmountCalories, minAmountFat, minAmountSaturatedFat, minAmountTransFat, minAmountCholesterol, minAmountSodium, minAmountCarbs, minAmountFiber, minAmountSugar, minAmountProtein, minAmountWeightWatchersPoints, maxAmountCalories, maxAmountFat, maxAmountSaturatedFat, maxAmountTransFat, maxAmountCholesterol, maxAmountSodium, maxAmountCarbs, maxAmountFiber, maxAmountSugar, maxAmountProtein, maxAmountWeightWatchersPoints], (err, result) => {
        if (err) {
      console.log(err);
        }
      else{
        console.log(result);
      }
    });
    

});

//INSERTS A MEALPLAN


app.post("/api/insertOneMealPlan/:Username", (req, res) => {
    
    const Username = req.params.Username;
    const Restriction_Id = req.body.Restriction_Id;
    const Customer_Id2 = req.body.Customer_Id2;
    const totalCalories = req.body.totalCalories;
    const totalFat = req.body.totalFat;
    const totalSaturatedFat = req.body.totalSaturatedFat;
    const totalTransFat = req.body.totalTransFat;
    const totalCholesterol = req.body.totalCholesterol;
    const totalSodium = req.body.totalSodium;
    const totalCarbs = req.body.totalCarbs;
    const totalFiber = req.body.totalFiber;
    const totalSugar = req.body.totalSugar;
    const totalProtein = req.body.totalProtein;
    const totalWeightWatchersPoints = req.body.totalWeightWatchersPoints;
    
    
    let insertOnePlan = 'INSERT INTO mealplan (Restriction_Id, Customer_Id2, totalCalories, totalFat, totalSaturatedFat, totalTransFat, totalCholesterol, totalSodium, totalCarbs, totalFiber, totalSugar, totalProtein, totalWeightWatchersPoints) SELECT restrictions.Restriction_Id, restrictions.Customer_Id, COALESCE(NULL, 0), COALESCE(NULL, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0), COALESCE(0, 0) FROM login NATURAL JOIN customer NATURAL JOIN restrictions WHERE login.Username = ?;';

    db.query(insertOnePlan, [Username], (err, result) => {
        if (err) {
      console.log(err);
        }
      else{
        console.log(result);
      }
    });
    

});






//QUERY THAT CHECKS IF USER EXISTS IN FATABASE AND DISPLAYS THE USERNAME IF THEY ARE IN THE SYSTEM


app.post('/api/login',(req,res) =>{

     //grabs from front end
    Username = req.body.Username;
    //const Username = req.body.Username;
    const Password = req.body.Password;
    
    
    const sqlRetrieveLogin = 
    'SELECT * FROM login WHERE Username = ? AND Password = ?';
    db.query(sqlRetrieveLogin, [Username, Password], (err, result) => {
        
        if(err){
            res.send({err:err})
        }
        if (result.length > 0){
            res.send(result);
        }
        else{
                res.send({message: "No user found, data meal plan will not be saved."})
        }


    });

    // const getAllCustomers = "SELECT * FROM customer";
    // db.query(getAllCustomers, (err, result) => {
    //     res.send(result);


    // });



});

app.get("/api/getMostRecenttMealPlanNumber/:Username", (req, res) => {
  Username = req.params.Username;
  const getmaxPlan = 'SELECT MAX(Meal_Plan_Number) \
                      FROM login NATURAL JOIN customer NATURAL JOIN restrictions NATURAL JOIN mealplan \
                      WHERE login.Username = ?';

  db.query(getmaxPlan, Username, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      console.log(result[0]['MAX(Meal_Plan_Number)']);
      // res.send(result[0]['MAX(Meal_Plan_Number)']);
      const mostRecentMealPlanNumber = result[0]['MAX(Meal_Plan_Number)'];
      res.send(result);
    }
  });
});


app.get("/api/getItemsPlan/:Meal_Plan_Number", (req, res) => {
  Meal_Plan_Number = req.params.Meal_Plan_Number;
  
  const getmItems = 'SELECT * \
                      FROM itemplans \
                      WHERE Meal_Plan_Number = ?';

  db.query(getmItems, Meal_Plan_Number, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      console.log("Items in Plan for ");
      console.log(Meal_Plan_Number);
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/api/insertItemIntoPlan/:Meal_Plan_Number/:Item", (req, res) => {
    Meal_Plan_Number = req.params.Meal_Plan_Number;
    Item = req.params.Item;
    
    
    let insertOneItem = 'INSERT INTO itemplans (Meal_Plan_Number, Item) VALUES (?, ?)';


    db.query(insertOneItem, [Meal_Plan_Number,Item], (err, result) => {
        if (err) {
      console.log(err);
        }
      else{
        console.log(result);
      }
    });
    

});


//QUERY THAT GETS USER RESTRICTIONS


app.get("/api/getRestrictions/:Username", (req, res) => {
  Username = req.params.Username;
  const sqlQuery = `SELECT 
                      minAmountCalories,
                      minAmountFat, 
                      minAmountSaturatedFat, 
                      minAmountTransFat, 
                      minAmountCholesterol, 
                      minAmountSodium, 
                      minAmountCarbs, 
                      minAmountFiber, 
                      minAmountSugar, 
                      minAmountProtein, 
                      minAmountWeightWatchersPoints, 
                      maxAmountCalories, 
                      maxAmountFat, 
                      maxAmountSaturatedFat, 
                      maxAmountTransFat, 
                      maxAmountCholesterol, 
                      maxAmountSodium, 
                      maxAmountCarbs, 
                      maxAmountFiber, 
                      maxAmountSugar, 
                      maxAmountProtein, 
                      maxAmountWeightWatchersPoints 
                    FROM login 
                    NATURAL JOIN customer 
                    NATURAL JOIN restrictions 
                    WHERE login.Username = ?`;

  db.query(sqlQuery, Username, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });
});


//Queries to search items
//INCLUDES KEYWORD SEARCH QUERY AND OUR TWO ADVANCED QUERIES

app.get("/api/getSearch/:searchTerm/:UsernameLogin", (req, res) => {
  const UsernameLogin = req.params.UsernameLogin;
  const searchTerm = req.params.searchTerm;
  let sqlSearch = `SELECT * FROM food`;

  //ADVANCED QUERIES
if (searchTerm == "low carb") {
    sqlSearch = 'SELECT food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers \
                FROM (login NATURAL JOIN customer NATURAL JOIN restrictions), food \
                WHERE (login.Username = ?) AND (food.Calories <= restrictions.maxAmountCalories) AND (food.Calories >= restrictions.minAmountCalories) \
                GROUP BY food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers \
                HAVING food.Carbs <= AVG(food.Carbs)';

  db.query(sqlSearch, UsernameLogin, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });

} else if (searchTerm == "high protein") {
    sqlSearch = 'SELECT food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers \
FROM (login NATURAL JOIN customer NATURAL JOIN restrictions), food \
WHERE (login.Username = ?) AND  food.Protein = ( \
    SELECT MAX(food.Protein) \
    FROM food \
    WHERE (food.Calories <= restrictions.maxAmountCalories) \
    AND (food.Calories >= restrictions.minAmountCalories) \
    AND (food.Sugar <= restrictions.maxAmountSugar) \
    AND (food.Sugar >= restrictions.minAmountSugar) \
) \
GROUP BY food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers \
HAVING food.Sugar <= AVG(food.Sugar) \
';

db.query(sqlSearch, UsernameLogin, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });

//KEYWORD SEARCH SEARCHES ITEMS 

} else if (searchTerm.toLowerCase() == "restrict") {
    sqlSearch = 'SELECT food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers \
FROM (login NATURAL JOIN customer NATURAL JOIN restrictions), food \
WHERE (login.Username = ?) \
AND (food.Calories >= restrictions.minAmountCalories) \
AND (food.Calories <= restrictions.maxAmountCalories) \
AND (food.SaturatedFat >= restrictions.minAmountSaturatedFat) \
AND (food.SaturatedFat <= restrictions.maxAmountSaturatedFat) \
AND (food.TransFat <= restrictions.maxAmountTransFat) \
AND (food.TransFat >= restrictions.minAmountTransFat) \
AND (food.Cholesterol <= restrictions.maxAmountCholesterol) \
AND (food.Cholesterol >= restrictions.minAmountCholesterol) \
AND (food.Sodium <= restrictions.maxAmountSodium) \
AND (food.Sodium >= restrictions.minAmountSodium) \
AND (food.Carbs <= restrictions.maxAmountCarbs) \
AND (food.Carbs >= restrictions.minAmountCarbs) \
AND (food.Fiber <= restrictions.maxAmountFiber) \
AND (food.Fiber >= restrictions.minAmountFiber) \
AND (food.Sugar <= restrictions.maxAmountSugar) \
AND (food.Sugar >= restrictions.minAmountSugar) \
AND (food.Protein <= restrictions.maxAmountProtein) \
AND (food.Protein >= restrictions.minAmountProtein) \
AND (food.WeightWatchers <= restrictions.maxAmountWeightWatchersPoints) \
AND (food.WeightWatchers >= restrictions.minAmountWeightWatchersPoints) \
GROUP BY food.Item, food.Category, food.Calories, food.Fat, food.SaturatedFat,food.TransFat,food.Cholesterol,food.Sodium,food.Carbs, food.Fiber, food.Sugar, food.Protein, food.WeightWatchers';

db.query(sqlSearch, UsernameLogin, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });

//KEYWORD SEARCH SEARCHES ITEMS 
}else if (searchTerm) {
  sqlSearch += ` WHERE food.Item LIKE '%${searchTerm}%'`;

   db.query(sqlSearch, searchTerm, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });

}

// if (searchTerm.toLowerCase() != "restrict") {
//   db.query(sqlSearch, searchTerm, UsernameLogin, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Server error");
//     } else {
//       res.send(result);
//     }
//   });
// }
  
});



app.get("/api/getMealPlans/:Username", (req, res) => {
  Username = req.params.Username;
  const sqlQuery = `SELECT
                    Meal_Plan_Number,
                      totalCalories,
                      totalFat, 
                      totalSaturatedFat, 
                      totalTransFat, 
                      totalCholesterol, 
                      totalSodium, 
                      totalCarbs, 
                      totalFiber, 
                      totalSugar, 
                      totalProtein, 
                      totalWeightWatchersPoints 
                    FROM login 
                    NATURAL JOIN customer 
                    JOIN mealplan ON (customer.Customer_Id = mealplan.Customer_Id2)
                    WHERE login.Username = ?`;

  db.query(sqlQuery, Username, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });
});




//Queries that update each restrictions

app.put("/api/updateMinCal", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinCal = req.body.newMinCal;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountCalories = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinCal, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinFat = req.body.newMinFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinSatFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinSatFat = req.body.newMinSatFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountSaturatedFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinSatFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinTransFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinTransFat = req.body.newMinTransFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountTransFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinTransFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinChol", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinChol = req.body.newMinChol;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountCholesterol = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinChol, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinSod", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinSod = req.body.newMinSod;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountSodium = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinSod, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinCarbs", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinCarbs = req.body.newMinCarbs;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountCarbs = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinCarbs, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinFib", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinFib = req.body.newMinFib;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountFiber = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinFib, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinSug", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinSug = req.body.newMinSug;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountSugar = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinSug, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinPro", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinPro = req.body.newMinPro;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountProtein = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinPro, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMinWW", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMinWW = req.body.newMinWW;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.minAmountWeightWatchersPoints = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMinWW, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxCal", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxCal = req.body.newMaxCal;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountCalories = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxCal, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxFat = req.body.newMaxFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxSatFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxSatFat = req.body.newMaxSatFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountSaturatedFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxSatFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxTransFat", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxTransFat = req.body.newMaxTransFat;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountTransFat = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxTransFat, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxChol", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxChol = req.body.newMaxChol;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountCholesterol = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxChol, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxSod", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxSod = req.body.newMaxSod;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountSodium = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxSod, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxCarbs", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxCarbs = req.body.newMaxCarbs;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountCarbs = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxCarbs, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxFib", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxFib = req.body.newMaxFib;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountFiber = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxFib, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxSug", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxSug = req.body.newMaxSug;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountSugar = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxSug, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxPro", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxPro = req.body.newMaxPro;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountProtein = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxPro, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})

app.put("/api/updateMaxWW", (req, res) => {
    const loginUsername = req.body.loginUsername;
    const newMaxWW = req.body.newMaxWW;
   const sqlUpdateRes = 'UPDATE restrictions \
                      NATURAL JOIN customer \
                      NATURAL JOIN login \
                      SET restrictions.maxAmountWeightWatchersPoints = ? \
                      WHERE login.username = ?';

db.query(sqlUpdateRes, [newMaxWW, loginUsername], (err, result) => {
  if (err) {
    // handle error
    console.log(err);
     res.status(500).send("Server error");
  } else {
    // handle success
    res.send(result);
  }
});

})





//Query to delete meal plan



app.delete("/api/deletePlan/:Meal_Plan_Number/:Username", (req, res) => {
  const Meal_Plan_Number = req.params.Meal_Plan_Number;
  const Username = req.params.Username;

  sqlDeletePlan = 'DELETE mealplan FROM mealplan JOIN customer ON mealplan.Customer_Id2 = customer.Customer_Id NATURAL JOIN login WHERE mealplan.Meal_Plan_Number = ? AND login.Username = ?;';

  db.query(sqlDeletePlan, [Meal_Plan_Number, Username], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.send(result);
    }
  });
});



app.put("/api/addItemToMealPlan/:Meal_Plan_Number/:Item/:Calories/:Fat/:SaturatedFat/:TransFat/:Cholesterol/:Sodium/:Carbs/:Fiber/:Sugar/:Protein/:WeightWatchers", (req, res) => {
    const Meal_Plan_Number = req.params.Meal_Plan_Number;
    const Item = req.params.Item;
    const Calories = req.params.Calories;
    const Fat = req.params.Fat;
    const SaturatedFat = req.params.SaturatedFat;
    const TransFat = req.params.TransFat;
    const Cholesterol = req.params.Cholesterol;
    const Sodium = req.params.Sodium;
    const Carbs = req.params.Carbs;
    const Fiber = req.params.Fiber;
    const Sugar = req.params.Sugar;
    const Protein = req.params.Protein;
    const WeightWatchers = req.params.WeightWatchers;


   const addItem = 'UPDATE mealplan SET \
  totalCalories = totalCalories + ?, \
  totalFat = totalFat + ?, \
  totalSaturatedFat = totalSaturatedFat + ?, \
  totalTransFat = totalTransFat + ?, \
  totalCholesterol = totalCholesterol + ?, \
  totalSodium = totalSodium + ?, \
  totalCarbs = totalCarbs + ?, \
  totalFiber = totalFiber + ?, \
  totalSugar = totalSugar + ?, \
  totalProtein = totalProtein + ?, \
  totalWeightWatchersPoints = totalWeightWatchersPoints + ? \
WHERE Meal_Plan_Number = ?';

db.query(addItem, [Calories, Fat, SaturatedFat, TransFat, Cholesterol, Sodium, Carbs, Fiber, Sugar, Protein, WeightWatchers, Meal_Plan_Number], (err, result) => {
  if (err) {
    console.log(err);
    res.status(500).send("Server error");
   // res.send(21);
  } else {
    res.send("yes");
  }
});

})


//app.get()

app.listen(3002,()=> {

console.log("working");
// db.connect(function(err){

//         if(err) throw err;
//         console.log('Database connected');
//     })

});


// OUR TRANSACTION HERE
db.getConnection((err, connection) => {
  if (err) {
    console.error(err);
    return;
  }

  connection.beginTransaction((err) => {
    if (err) {
      console.error(err);
      return;
    }

    const sql = `
      SELECT Item INTO @A
      FROM food
      WHERE Sugar <= 0.5 * (SELECT AVG(Sugar) FROM food)
      AND Calories <= 0.5 * (SELECT AVG(Calories) FROM food)
      AND WeightWatchers IN (SELECT WeightWatchers FROM (SELECT WeightWatchers FROM food ORDER BY WeightWatchers ASC LIMIT 1) AS temp_1)
      ORDER BY Item;
      
      SELECT Item INTO @b
      FROM food
      WHERE Sugar >= 1.5 * (SELECT AVG(Sugar) FROM food)
      AND Calories >= 1.5 * (SELECT AVG(Calories) FROM food)
      AND WeightWatchers IN (SELECT WeightWatchers FROM (SELECT WeightWatchers FROM food ORDER BY WeightWatchers DESC LIMIT 1) AS temp_2)
      ORDER BY Item;

      UPDATE food SET Item = CONCAT(Item, '-recommended') WHERE Item = @a AND Item NOT LIKE '%-recommended';
      UPDATE food SET Item = CONCAT(Item, '-unpleasant') WHERE Item = @b AND Item NOT LIKE '%-unpleasant';
    `;

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.error(err);
        connection.rollback(() => {
          connection.release();
        });
        return;
      }

      connection.commit((err) => {
        if (err) {
          console.error(err);
          connection.rollback(() => {
            connection.release();
          });
          return;
        }

        console.log('Transaction committed successfully.');
        connection.release();
      });
    });
  });
});


/*
RUN BACKEND: 

cd server
npm run devStart



RUN FRONTEND:
cd client
npm start




*/

