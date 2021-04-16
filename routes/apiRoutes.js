/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the GROUP 4 Air Pollution APP!");
});

/// /////////////////////////////////
/// ////Demgraphics Endpoints////////
/// /////////////////////////////////
router.get("/demo", async (req, res) => {
  try {
    const demo = await db.demo.findAll();
    const reply =
      demo.length > 0 ? { data: demo } : { message: "no results found" };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/demo/:demo_id", async (req, res) => {
  try {
    const demo = await db.demo.findAll({
      where: {
        demo_id: req.params.demo_id,
      },
    });

    res.json(demo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/demo", async (req, res) => {
  const demo = await db.demo.findAll();
  const currentId = (await demo.length) + 1;
  try {
    const newDemo = await db.demo.create({
      demo_id: currentId,
      race: req.body.race,
      religion: req.body.religion,
      annual_income: req.body.annual_income,
      gender_ratio: req.body.gender_ratio,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/demo/:hall_id", async (req, res) => {
  try {
    await db.demo.destroy({
      where: {
        demo_id: req.params.demo_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/demo", async (req, res) => {
  try {
    await db.demo.update(
      {
        race: req.body.race,
        religion: req.body.religion,
      },
      {
        where: {
          demo_id: req.body.demo_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/* Everything past here needs to be changed to point to OUR database, not the dining hall database that it 
// is currently pointing
*/

/// /////////////////////////////////
/// ////////Pollution Endpoints//////////
/// /////////////////////////////////
router.get("/pollution", async (req, res) => {
  try {
    const pollution = await db.pollution.findAll();
    res.json(pollution);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/pollution/:pollution_id", async (req, res) => {
  try {
    const pollution = await db.pollution.findAll({
      where: {
        pollution_id: req.params.pollution_id,
      },
    });

    res.json(pollution);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/pollution", async (req, res) => {
  const pollution = await db.pollution.findAll();
  const currentId = (await pollution.length) + 1;
  try {
    const newDemo = await db.pollution.create({
      pollution_id: currentId,
      O3: req.body.O3,
      PM10: req.body.PM10,
      SO2: req.body.SO2,
      NO2: req.body.NO2,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/pollution/:pollution_id", async (req, res) => {
  try {
    await db.pollution.destroy({
      where: {
        pollution_id: req.params.pollution_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/pollution", async (req, res) => {
  try {
    await db.pollution.update(
      {
        O3: req.body.O3,
        PM10: req.body.PM10,
        SO2: req.body.SO2,
        NO2: req.body.NO2,
      },
      {
        where: {
          pollution_id: req.body.pollution_id,
        },
      }
    );
    res.send("Meal Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// /////////////////////////////////
/// ////////Political Party Endpoints//////////
/// /////////////////////////////////
router.get("/pol_party", async (req, res) => {
  try {
    const pol = await db.pol_party.findAll();
    res.json(pol);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/pol_party/:pol_party_id", async (req, res) => {
  try {
    const pol = await db.pol_party.findAll({
      where: {
        pol_party_id: req.params.pol_party_id,
      },
    });

    res.json(pol);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/pol_party", async (req, res) => {
  const pol = await db.pol_party.findAll();
  const currentId = (await pol_party.length) + 1;
  try {
    const newDemo = await db.pollution.create({
      pol_party_id: currentId,
      party_name: req.body.party_name,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/pol_party/:pol_party_id", async (req, res) => {
  try {
    await db.pol_party.destroy({
      where: {
        pol_party_id: req.params.pol_party_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/pol_party", async (req, res) => {
  try {
    await db.pol_party.update(
      {
        party_name: req.body.party_name,
      },
      {
        where: {
          pol_party_id: req.body.pol_party_id,
        },
      }
    );
    res.send("Meal Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});
/// /////////////////////////////////
/// ////////Development Endpoints/////////
/// /////////////////////////////////
router.get("/development", async (req, res) => {
  try {
    const macros = await db.dev.findAll();
    res.send(development);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/development/:development_id", async (req, res) => {
  try {
    const development = await db.development.findAll({
      where: {
        development_id: req.params.development_id,
      },
    });
    res.json(development);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/development", async (req, res) => {
  const development = await db.development.findAll();
  const currentId = (await development.length) + 1;
  try {
    const newDemo = await db.development.create({
      development_id: currentId,
      race: req.body.race,
      religion: req.body.religion,
      annual_income: req.body.annual_income,
      gender_ratio: req.body.gender_ratio,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});
router.delete("/development/:development_id", async (req, res) => {
  try {
    await db.development.destroy({
      where: {
        development_id: req.params.development_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/development", async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category,
        calories: req.body.calories,
        serving_size: req.body.serving_size,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat,
      },
      {
        where: {
          meal_id: req.body.meal_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// /////////////////////////////////
/// Environment Conditions Endpoints///
/// /////////////////////////////////
router.get("/environment_conditions", async (req, res) => {
  try {
    const conditions = await db.environment_conditions.findAll();
    res.json(environment_conditions);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/environment_conditions/:env_id", async (req, res) => {
  try {
    const conditions = await db.environment_conditions.findAll({
      where: {
        env_id: req.params.env_id,
      },
    });
    res.json(conditions);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/environment_conditions", async (req, res) => {
  const environment_conditions = await db.environment_conditions.findAll();
  const currentId = (await environment_conditions.length) + 1;
  try {
    const newDemo = await db.environment_conditions.create({
      env_id: currentId,
      race: req.body.race,
      religion: req.body.religion,
      annual_income: req.body.annual_income,
      gender_ratio: req.body.gender_ratio,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/environment_conditions/:env_id", async (req, res) => {
  try {
    await db.environment_conditions.destroy({
      where: {
        evnv_id: req.params.env_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom =
  "SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)";
router.get("/table/data", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get("/map/data", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});
router.get("/custom", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

export default router;
