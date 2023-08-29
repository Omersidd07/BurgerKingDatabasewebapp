import './App.css';
import './style.css';
import React, {useState, useEffect, Component} from "react";
import Axios from "axios";


function App() {

  // let myLocalStorage = [];
  // const [myLocalStorageItems, setMyLocalStorageItems] = useState();



  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [UsernameLogin, setUsernameLogin] = useState("");
  const [PasswordLogin, setPasswordLogin] = useState("");

  const [CustomerName, setCustomerName] = useState("b");
  const [Age, setAge] = useState(0);
  const [Gender, setGender] = useState("Male");

  const [LoginStatus, setLoginStatus] = useState("");

  const [foodItemList, setfoodItemList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //restrictions

  const [Customer_Id, setCustomer_Id] = useState();
  const [minAmountCalories, setminAmountCalories] = useState(0);
  const [minAmountFat, setminAmountFat] = useState(0);
  const [minAmountSaturatedFat, setminAmountSaturatedFat] = useState(0);
  const [minAmountTransFat, setminAmountTransFat] = useState(0);
  const [minAmountCholesterol, setminAmountCholesterol] = useState(0);
  const [minAmountSodium, setminAmountSodium] = useState(0);
  const [minAmountCarbs, setminAmountCarbs] = useState(0);
  const [minAmountFiber, setminAmountFiber] = useState(0);
  const [minAmountSugar, setminAmountSugar] = useState(0);
  const [minAmountProtein, setminAmountProtein] = useState(0);
  const [minAmountWeightWatchersPoints, setminAmountWeightWatchersPoints] = useState(0);
  const [maxAmountCalories, setmaxAmountCalories] = useState(0);
  const [maxAmountFat, setmaxAmountFat] = useState(0);
  const [maxAmountSaturatedFat, setmaxAmountSaturatedFat] = useState(0);
  const [maxAmountTransFat, setmaxAmountTransFat] = useState(0);
  const [maxAmountCholesterol, setmaxAmountCholesterol] = useState(0);
  const [maxAmountSodium, setmaxAmountSodium] = useState(0);
  const [maxAmountCarbs, setmaxAmountCarbs] = useState(0);
  const [maxAmountFiber, setmaxAmountFiber] = useState(0);
  const [maxAmountSugar, setmaxAmountSugar] = useState(0);
  const [maxAmountProtein, setmaxAmountProtein] = useState(0);
  const [maxAmountWeightWatchersPoints, setmaxAmountWeightWatchersPoints] = useState(0);


  const [restrictionsList, setRestrictionsList] = useState([]);
  
  
  
  
  //mealPlan
  const [Restriction_Id, setRestriction_Id] = useState();
  const [totalCalories, settotalCalories] = useState(0);
  const [totalFat, settotalFat] = useState(0);
  const [totalSaturatedFat, settotalSaturatedFat] = useState(0);
  const [totalTransFat, settotalTransFat] = useState(0);
  const [totalCholesterol, settotalCholesterol] = useState(0);
  const [totalSodium, settotalSodium] = useState(0);
  const [totalCarbs, settotalCarbs] = useState(0);
  const [totalFiber, settotalFiber] = useState(0);
  const [totalSugar, settotalSugar] = useState(0);
  const [totalProtein, settotalProtein] = useState(0);
  const [totalWeightWatchersPoints, settotalWeightWatchersPoints] = useState(0);
  
  const [mealPlan, setMealPlan] = useState([]);

  

  const [Meal_Plan_Number, setMeal_Plan_Number] = useState(0);

  const [ItemListForMealPlan, setItemListForMealPlan] = useState([]);


  // new restriction values
  const [newMinCal, setMinCal] = useState(0);
  const [newMinFat, setMinFat] = useState(0);
  const [newMinSatFat, setMinSatFat] = useState(0);
  const [newMinTransFat, setMinTransFat] = useState(0);
  const [newMinChol, setMinChol] = useState(0);
  const [newMinSod, setMinSod] = useState(0);
  const [newMinCarbs, setMinCarbs] = useState(0);
  const [newMinFib, setMinFib] = useState(0);
  const [newMinSug, setMinSug] = useState(0);
  const [newMinPro, setMinPro] = useState(0);
  const [newMinWW, setMinWW] = useState(0);
  const [newMaxCal, setMaxCal] = useState(0);
  const [newMaxFat, setMaxFat] = useState(0);
  const [newMaxSatFat, setMaxSatFat] = useState(0);
  const [newMaxTransFat, setMaxTransFat] = useState(0);
  const [newMaxChol, setMaxChol] = useState(0);
  const [newMaxSod, setMaxSod] = useState(0);
  const [newMaxCarbs, setMaxCarbs] = useState(0);
  const [newMaxFib, setMaxFib] = useState(0);
  const [newMaxSug, setMaxSug] = useState(0);
  const [newMaxPro, setMaxPro] = useState(0);
  const [newMaxWW, setMaxWW] = useState(0);
  

  const [mealPlansList, setMealPlansList] = useState([]);




  const submitCustomerRestrictions = () => {
        Axios.post("http://localhost:3002/api/insertDefaultRestrictions", {
    Customer_Id: Customer_Id,
    minAmountCalories: minAmountCalories,
    minAmountFat: minAmountFat,
    minAmountSaturatedFat: minAmountSaturatedFat,
    minAmountTransFat: minAmountTransFat,
    minAmountCholesterol: minAmountCholesterol,
    minAmountSodium: minAmountSodium,
    minAmountCarbs: minAmountCarbs,
    minAmountFiber: minAmountFiber,
    minAmountSugar: minAmountSugar,
    minAmountProtein: minAmountProtein,
    minAmountWeightWatchersPoints: minAmountWeightWatchersPoints,
    maxAmountCalories: maxAmountCalories,
    maxAmountFat: maxAmountFat,
    maxAmountSaturatedFat: maxAmountSaturatedFat,
    maxAmountTransFat: maxAmountTransFat,
    maxAmountCholesterol: maxAmountCholesterol,
    maxAmountSodium: maxAmountSodium,
    maxAmountCarbs: maxAmountCarbs,
    maxAmountFiber: maxAmountFiber,
    maxAmountSugar: maxAmountSugar,
    maxAmountProtein: maxAmountProtein,
    maxAmountWeightWatchersPoints: maxAmountWeightWatchersPoints
  }).then((response) => {
    // extract the restrictions object from the data
    const restrictionsData = response.data[0];
    // set the restrictionsList state variable directly to the object
    setRestrictionsList(restrictionsData);
  });
      //alert("You have been registered!");

    };


  const submitRegister = () => {
    Axios.post("http://localhost:3002/api/insert", {
      Username: userName,
      Password: password,

    });
    alert("You have been registered!");

  };

  const submitCustomerInfo = () => {
    Axios.post("http://localhost:3002/api/insertCust", {
      Username: userName,
      //Password: password,
      CustomerName: CustomerName,
      Gender: Gender,
      Age: Age,
    });

  };



  const submitOneMealPlan = () => {
    Axios.post(`http://localhost:3002/api/insertOneMealPlan/${UsernameLogin}`, {
      
      Meal_Plan_Number: Meal_Plan_Number,
      Restriction_Id: Restriction_Id,
      Customer_Id2: Customer_Id,
      totalCalories: totalCalories,
      totalFat: totalFat,
      totalSaturatedFat: totalSaturatedFat,
      totalTransFat: totalTransFat,
      totalCholesterol: totalCholesterol,
      totalSodium: totalSodium,
      totalCarbs: totalCarbs,
      totalFiber: totalFiber,
      totalSugar: totalSugar,
      totalProtein: totalProtein,
      totalWeightWatchersPoints: totalWeightWatchersPoints,
    }).then((res) => {
    // Add the new meal plan to the list
    const dataAsArray = Object.entries(res.data).map(([key, value]) => ({ ...value, id: key }));
    setMealPlansList([...mealPlansList, dataAsArray]);

    // Reset the form fields
    //setMeal_Plan_Number(0);
    setRestriction_Id(0);
    setCustomer_Id(0);
    settotalCalories(0);
    settotalFat(0);
    settotalSaturatedFat(0);
    settotalTransFat(0);
    settotalCholesterol(0);
    settotalSodium(0);
    settotalCarbs(0);
    settotalFiber(0);
    settotalSugar(0);
    settotalProtein(0);
    settotalWeightWatchersPoints(0);
  }).catch((err) => {
    console.log(err);
  });
};






  const LoginUser = () => {
    Axios.post("http://localhost:3002/api/login", {
      Username: UsernameLogin,
      Password: PasswordLogin,
    }).then((response) =>{

      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        getMostRecenttMealPlanNumber(UsernameLogin);
        setLoginStatus("Hello, " + response.data[0].Username)
      }


    });



  };

  useEffect(() => {
  if (LoginStatus.startsWith("Hello, ")) {
    Axios.get(`http://localhost:3002/api/getRestrictions/${UsernameLogin}`).then((response) => {
        //setRestrictionsList(response.data);
        const dataAsArray = Object.entries(response.data).map(([key, value]) => ({ ...value, id: key }));
        setRestrictionsList(dataAsArray);

        console.log(response.data);
        console.log(Array.isArray(restrictionsList));
        console.log(restrictionsList)
      }).catch((error) => {
        console.log(error);
      });
  }
}, [LoginStatus]);



  useEffect(() => {
  if (LoginStatus.startsWith("Hello, ")) {
    Axios.get(`http://localhost:3002/api/getMealPlans/${UsernameLogin}`).then((response) => {

        const dataAsArray = Object.entries(response.data).map(([key, value]) => ({ ...value, id: key }));
        setMealPlan(dataAsArray);
        

        console.log(response.data);
        console.log(Array.isArray(mealPlan));
        console.log(mealPlan)
      }).catch((error) => {
        console.log(error);
      });
  }
}, [LoginStatus]);



useEffect(() => {
  const getSearchResults = async () => {
    try {
      const response = await Axios.get(`http://localhost:3002/api/getSearch/${searchTerm}/${UsernameLogin}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMenuItems = async () => {
    try {
      const response = await Axios.get(`http://localhost:3002/api/getAllMenuItems`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (searchTerm.length > 0) {
    getSearchResults();
  } else {
    getAllMenuItems();
  }

}, [searchTerm]);



// update restriction values
const updateMinCal = () => {
  Axios.put("http://localhost:3002/api/updateMinCal", {
    newMinCal: newMinCal,
    loginUsername: UsernameLogin,
  });
  setMinCal(0);
};

const updateMinFat = () => {
  Axios.put("http://localhost:3002/api/updateMinFat", {
    newMinFat: newMinFat,
    loginUsername: UsernameLogin,
  });
  setMinFat(0);
};

const updateMinSatFat = () => {
  Axios.put("http://localhost:3002/api/updateMinSatFat", {
    newMinSatFat: newMinSatFat,
    loginUsername: UsernameLogin,
  });
  setMinSatFat(0);
};

const updateMinTransFat = () => {
  Axios.put("http://localhost:3002/api/updateMinTransFat", {
    newMinTransFat: newMinTransFat,
    loginUsername: UsernameLogin,
  });
  setMinTransFat(0);
};

const updateMinChol = () => {
  Axios.put("http://localhost:3002/api/updateMinChol", {
    newMinChol: newMinChol,
    loginUsername: UsernameLogin,
  });
  setMinChol(0);
};

const updateMinSod = () => {
  Axios.put("http://localhost:3002/api/updateMinSod", {
    newMinSod: newMinSod,
    loginUsername: UsernameLogin,
  });
  setMinSod(0);
};

const updateMinCarbs = () => {
  Axios.put("http://localhost:3002/api/updateMinCarbs", {
    newMinCarbs: newMinCarbs,
    loginUsername: UsernameLogin,
  });
  setMinCarbs(0);
};

const updateMinFib = () => {
  Axios.put("http://localhost:3002/api/updateMinFib", {
    newMinFib: newMinFib,
    loginUsername: UsernameLogin,
  });
  setMinFib(0);
};

const updateMinSug = () => {
  Axios.put("http://localhost:3002/api/updateMinSug", {
    newMinSug: newMinSug,
    loginUsername: UsernameLogin,
  });
  setMinSug(0);
};

const updateMinPro = () => {
  Axios.put("http://localhost:3002/api/updateMinPro", {
    newMinPro: newMinPro,
    loginUsername: UsernameLogin,
  });
  setMinPro(0);
};

const updateMinWW = () => {
  Axios.put("http://localhost:3002/api/updateMinWW", {
    newMinWW: newMinWW,
    loginUsername: UsernameLogin,
  });
  setMinWW(0);
};

const updateMaxCal = () => {
  Axios.put("http://localhost:3002/api/updateMaxCal", {
    newMaxCal: newMaxCal,
    loginUsername: UsernameLogin,
  });
  setMaxCal(0);
};

const updateMaxFat = () => {
  Axios.put("http://localhost:3002/api/updateMaxFat", {
    newMaxFat: newMaxFat,
    loginUsername: UsernameLogin,
  });
  setMaxFat(0);
};

const updateMaxSatFat = () => {
  Axios.put("http://localhost:3002/api/updateMaxSatFat", {
    newMaxSatFat: newMaxSatFat,
    loginUsername: UsernameLogin,
  });
  setMaxSatFat(0);
};

const updateMaxTransFat = () => {
  Axios.put("http://localhost:3002/api/updateMaxTransFat", {
    newMaxTransFat: newMaxTransFat,
    loginUsername: UsernameLogin,
  });
  setMaxTransFat(0);
};

const updateMaxChol = () => {
  Axios.put("http://localhost:3002/api/updateMaxChol", {
    newMaxChol: newMaxChol,
    loginUsername: UsernameLogin,
  });
  setMaxChol(0);
};

const updateMaxSod = () => {
  Axios.put("http://localhost:3002/api/updateMaxSod", {
    newMaxSod: newMaxSod,
    loginUsername: UsernameLogin,
  });
  setMaxSod(0);
};

const updateMaxCarbs = () => {
  Axios.put("http://localhost:3002/api/updateMaxCarbs", {
    newMaxCarbs: newMaxCarbs,
    loginUsername: UsernameLogin,
  });
  setMaxCarbs(0);
};

const updateMaxFib = () => {
  Axios.put("http://localhost:3002/api/updateMaxFib", {
    newMaxFib: newMaxFib,
    loginUsername: UsernameLogin,
  });
  setMaxFib(0);
};

const updateMaxSug = () => {
  Axios.put("http://localhost:3002/api/updateMaxSug", {
    newMaxSug: newMaxSug,
    loginUsername: UsernameLogin,
  });
  setMaxSug(0);
};

const updateMaxPro = () => {
  Axios.put("http://localhost:3002/api/updateMaxPro", {
    newMaxPro: newMaxPro,
    loginUsername: UsernameLogin,
  });
  setMaxPro(0);
};

const updateMaxWW = () => {
  Axios.put("http://localhost:3002/api/updateMaxWW", {
    newMaxWW: newMaxWW,
    loginUsername: UsernameLogin,
  });
  setMaxWW(0);
};

const deletePlan = (planNum,user) => {
  Axios.delete(`http://localhost:3002/api/deletePlan/${planNum}/${user}`);
  //setMeal_Plan_Number(0);
};

 const getMostRecenttMealPlanNumber = (UsernameLogin) => {
  // const mpn = Axios.get(`http://localhost:3002/api/getMostRecenttMealPlanNumber/${UsernameLogin}`);
  // console.log(mpn);
  // setMeal_Plan_Number(mpn);

   Axios.get(`http://localhost:3002/api/getMostRecenttMealPlanNumber/${UsernameLogin}`)
    .then(response => {
      const mpn = response.data[0]['MAX(Meal_Plan_Number)'];
      console.log(mpn);
      setMeal_Plan_Number(mpn);
      getItemsInMealPlan(mpn);
    })
    .catch(error => {
      console.log(error);
    });

 }

const getItemsInMealPlan = (Meal_Plan_Number) => {
     Axios.get(`http://localhost:3002/api/getItemsPlan/${Meal_Plan_Number}`)
    .then(response => {
      console.log("On BruhNem");
      const dataAsArray = Object.entries(response.data).map(([key, value]) => ({ ...value, id: key }));
        setItemListForMealPlan(dataAsArray);

        console.log(response.data);
        console.log(Array.isArray(mealPlan));
        console.log(mealPlan)
    })
    .catch(error => {
      console.log(error);
    });



}

const addItemToMealPlan = (Meal_Plan_Number, Item, Calories, Fat, 
            SaturatedFat, TransFat, Cholesterol, Sodium, Carbs, 
            Fiber, Sugar, Protein, WeightWatchers) => {

              console.log("bruh12");
              console.log(Meal_Plan_Number);
              console.log(Item);


              // myLocalStorage = JSON.parse(localStorage.getItem("myLocalStorage"));
              // myLocalStorage.push(Item);
              // setMyLocalStorageItems(myLocalStorage);
              // localStorage.setItem("myLocalStorage", JSON.stringify(myLocalStorage));

              

              Axios.put(`http://localhost:3002/api/addItemToMealPlan/${Meal_Plan_Number}/
              ${Item}/${Calories}/${Fat}/${SaturatedFat}/${TransFat}/${Cholesterol}/
              ${Sodium}/${Carbs}/${Fiber}/${Sugar}/${Protein}/${WeightWatchers}/`, {


             
              }).then(response => {
                const tmp =  response.data[0];;
                console.log( response.data[0]);
                if (tmp == "y") {
                 
                  insertItemIntoPlan(Meal_Plan_Number, Item);
                }

              });

              // .then(response => {
              //   const mpn = response.data[0]['MAX(Meal_Plan_Number)'];
              //   console.log(mpn);
              //   setMeal_Plan_Number(mpn);
              //   getItemsInMealPlan(mpn);
              // })
              // .catch(error => {
              //   console.log(error);
              // });
  }

// const addItemToMealPlan = (Meal_Plan_Number, Item, Calories, Fat, 
//             SaturatedFat, TransFat, Cholesterol, Sodium, Carbs, 
//             Fiber, Sugar, Protein, WeightWatchers) => {

//               console.log("bruh12");
//               console.log(Meal_Plan_Number);
//               console.log(Item);


//               // myLocalStorage = JSON.parse(localStorage.getItem("myLocalStorage"));
//               // myLocalStorage.push(Item);
//               // setMyLocalStorageItems(myLocalStorage);
//               // localStorage.setItem("myLocalStorage", JSON.stringify(myLocalStorage));

              

//               Axios.put(`http://localhost:3002/api/addItemToMealPlan/${Meal_Plan_Number}/
//               ${Item}/${Calories}/${Fat}/${SaturatedFat}/${TransFat}/${Cholesterol}/
//               ${Sodium}/${Carbs}/${Fiber}/${Sugar}/${Protein}/${WeightWatchers}/`, {

                


             
//               })
//   }


const insertItemIntoPlan = (Meal_Plan_Number, Item) => {


  console.log("insertItemIntoPlan function worked");
  Axios.post(`http://localhost:3002/api/insertItemIntoPlan/${Meal_Plan_Number}/${Item}/`, {
             
  });




}



  return (


    <div className="App">
      
      <div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png" alt="Burger King logo" />
      </div>





      <div className ="Registration">
        <label>Username:</label>
        <input class = "regLog"
          type="text"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          />

        <label>Password:</label>
        <input class = "regLog"
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />

        <button onClick={() => {submitRegister();submitCustomerInfo();submitCustomerRestrictions();}}>Register</button>
      </div>
      
      
      <div className ="Login">
        <label>Username:</label>
        <input class = "regLog"
          type="text"
          name="userName"
          onChange={(e) => {
            setUsernameLogin(e.target.value);
          }}
          />

        <label>Password:</label>
        <input class = "regLog"
          type="text"
          name="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
          />
        <button onClick={LoginUser}>Login</button>

        <div class = "loginState">{LoginStatus}</div>
      </div>


      <div className="MealPlans">
        <h1>Meal Plans:</h1>
        <button onClick={submitOneMealPlan}>Add Meal Plan</button>
        <table>
  <thead>
    <tr>
      <th>Meal Plan</th>
      <th>Total Calories</th>
      <th>Total Fat</th>
      <th>Total Saturated Fat</th>
      <th>Total Trans Fat</th>
      <th>Total Cholesterol</th>
      <th>Total Sodium</th>
      <th>Total Carbs</th>
      <th>Total Fiber</th>
      <th>Total Sugar</th>
      <th>Total Protein</th>
      <th>Total Weight Watchers Points</th>
      <th>Delete Plan</th>
    </tr>
  </thead>
  <tbody>
    {mealPlan.map((Plan, index) => (
      <tr key={index}>
        <td>Meal Plan {index + 1}</td>
        <td>{Plan.totalCalories}</td>
        <td>{Plan.totalFat}</td>
        <td>{Plan.totalSaturatedFat}</td>
        <td>{Plan.totalTransFat}</td>
        <td>{Plan.totalCholesterol}</td>
        <td>{Plan.totalSodium}</td>
        <td>{Plan.totalCarbs}</td>
        <td>{Plan.totalFiber}</td>
        <td>{Plan.totalSugar}</td>
        <td>{Plan.totalProtein}</td>
        <td>{Plan.totalWeightWatchersPoints}</td>
        <td><button class="delete-btn" onClick={() => deletePlan(Plan.Meal_Plan_Number,UsernameLogin)}>Delete Plan</button></td>
      </tr>
    ))}


  

  </tbody>
  
</table>

<div style={{textAlign: 'center'}}>
  <table>
    <thead>
      <tr>
        <th>Items In Current Meal Plan:</th>
      </tr>
    </thead>
    <tbody>
      {ItemListForMealPlan.map((item) => (
        <tr key={item.id}>
          <td>{item.Item}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  {/* <div>
  <ul>
  {myLocalStorageItems.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
  </ul>
  </div> */}
        



      </div>

         <div className="Restrictions">

          <h1>Restrictions: </h1>
  {restrictionsList.map((restriction) => (
      <div key={restriction.id}>
    
<div class="container">

 <div class="left">


  <p>Minimum amount of calories: {restriction.minAmountCalories}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinCal(e.target.value)}}/>
  <button onClick={() => updateMinCal()}>Update</button>

  

  <p>Minimum amount of fat: {restriction.minAmountFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinFat(e.target.value)}}/>
  <button onClick={() => updateMinFat()}>Update</button>




  <p>Minimum amount of saturated fat: {restriction.minAmountSaturatedFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinSatFat(e.target.value)}}/>
  <button onClick={() => updateMinSatFat()}>Update</button>



  <p>Minimum amount of trans fat: {restriction.minAmountTransFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinTransFat(e.target.value)}}/>
  <button onClick={() => updateMinTransFat()}>Update</button>



  <p>Minimum amount of cholesterol: {restriction.minAmountCholesterol}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinChol(e.target.value)}}/>
  <button onClick={() => updateMinChol()}>Update</button>



  <p>Minimum amount of sodium: {restriction.minAmountSodium}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinSod(e.target.value)}}/>
  <button onClick={() => updateMinSod()}>Update</button>



  <p>Minimum amount of carbs: {restriction.minAmountCarbs}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinCarbs(e.target.value)}}/>
  <button onClick={() => updateMinCarbs()}>Update</button>



  <p>Minimum amount of fiber: {restriction.minAmountFiber}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinFib(e.target.value)}}/>
  <button onClick={() => updateMinFib()}>Update</button>



  <p>Minimum amount of sugar: {restriction.minAmountSugar}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinSug(e.target.value)}}/>
  <button onClick={() => updateMinSug()}>Update</button>



  <p>Minimum amount of protein: {restriction.minAmountProtein}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinPro(e.target.value)}}/>
  <button onClick={() => updateMinPro()}>Update</button>



  <p>Minimum amount of Weight Watchers points: {restriction.minAmountWeightWatchersPoints}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMinWW(e.target.value)}}/>
  <button onClick={() => updateMinWW()}>Update</button>

</div>

<div class="right">

  <p>Maximum amount of calories: {restriction.maxAmountCalories}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxCal(e.target.value)}}/>
  <button onClick={() => updateMaxCal()}>Update</button>



  <p>Maximum amount of fat: {restriction.maxAmountFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxFat(e.target.value)}}/>
  <button onClick={() => updateMaxFat()}>Update</button>



  <p>Maximum amount of saturated fat: {restriction.maxAmountSaturatedFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxSatFat(e.target.value)}}/>
  <button onClick={() => updateMaxSatFat()}>Update</button>



  <p>Maximum amount of trans fat: {restriction.maxAmountTransFat}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxTransFat(e.target.value)}}/>
  <button onClick={() => updateMaxTransFat()}>Update</button>



  <p>Maximum amount of cholesterol: {restriction.maxAmountCholesterol}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxChol(e.target.value)}}/>
  <button onClick={() => updateMaxChol()}>Update</button>



  <p>Maximum amount of sodium: {restriction.maxAmountSodium}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxSod(e.target.value)}}/>
  <button onClick={() => updateMaxSod()}>Update</button>



  <p>Maximum amount of carbs: {restriction.maxAmountCarbs}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxCarbs(e.target.value)}}/>
  <button onClick={() => updateMaxCarbs()}>Update</button>



  <p>Maximum amount of fiber: {restriction.maxAmountFiber}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxFib(e.target.value)}}/>
  <button onClick={() => updateMaxFib()}>Update</button>



  <p>Maximum amount of sugar: {restriction.maxAmountSugar}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxSug(e.target.value)}}/>
  <button onClick={() => updateMaxSug()}>Update</button>



  <p>Maximum amount of protein: {restriction.maxAmountProtein}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxPro(e.target.value)}}/>
  <button onClick={() => updateMaxPro()}>Update</button>



  <p>Maximum amount of Weight Watchers points: {restriction.maxAmountWeightWatchersPoints}</p>
  <input type="number" id="updateInput" onChange={(e) => 
      {setMaxWW(e.target.value)}}/>
  <button onClick={() => updateMaxWW()}>Update</button>

</div>

</div>

</div>
    ))}
</div>


    <div className="Search">
      <h1>Menu:</h1>
  <input
    type="text"
    placeholder="Search an Item on the Menu..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Calories</th>
        <th>Fat</th>
        <th>Saturated Fat</th>
        <th>Trans Fat</th>
        <th>Cholesterol</th>
        <th>Sodium</th>
        <th>Carbs</th>
        <th>Fiber</th>
        <th>Sugar</th>
        <th>Protein</th>
        <th>Weight Watchers</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {searchResults.map((result, index) => (
        <tr key={index}>
          <td>{result.Item}</td>
          <td>{result.Calories}</td>
          <td>{result.Fat}</td>
          <td>{result.SaturatedFat}</td>
          <td>{result.TransFat}</td>
          <td>{result.Cholesterol}</td>
          <td>{result.Sodium}</td>
          <td>{result.Carbs}</td>
          <td>{result.Fiber}</td>
          <td>{result.Sugar}</td>
          <td>{result.Protein}</td>
          <td>{result.WeightWatchers}</td>
          <td><button  onClick={() => {addItemToMealPlan(Meal_Plan_Number, result.Item, result.Calories, result.Fat, 
            result.SaturatedFat, result.TransFat, result.Cholesterol, result.Sodium, result.Carbs, 
            result.Fiber, result.Sugar, result.Protein, result.WeightWatchers);}}>Add</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div> 

    </div>
  );
}

export {App};
export default App;
