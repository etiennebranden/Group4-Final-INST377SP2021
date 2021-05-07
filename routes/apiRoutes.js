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

router.delete("/demo/:demo_id", async (req, res) => {
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
    res.send("Successfully Updated");
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
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});
/// /////////////////////////////////
/// ////////Development Endpoints/////////
/// /////////////////////////////////
router.get("/dev", async (req, res) => {
  try {
    const development = await db.dev.findAll();
    res.send(development);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/dev/:development_id", async (req, res) => {
  try {
    const development = await db.dev.findAll({
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

router.post("/dev", async (req, res) => {
  const development = await db.dev.findAll();
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
router.delete("/dev/:development_id", async (req, res) => {
  try {
    await db.dev.destroy({
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

router.put("/dev", async (req, res) => {
  try {
    await db.dev.update(
      {
        development_name: req.body.development_name,
      },
      {
        where: {
          development_id: req.body.development_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

/* router.put("/development", async (req, res) => {
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
}); */

/// /////////////////////////////////
/// Environment Conditions Endpoints///
/// /////////////////////////////////
router.get("/env_cond", async (req, res) => {
  try {
    const conditions = await db.env_cond.findAll();
    res.json(conditions);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/env_cond/:env_id", async (req, res) => {
  try {
    const conditions = await db.env_cond.findAll({
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

router.post("/env_cond", async (req, res) => {
  const environment_conditions = await db.env_cond.findAll();
  const currentId = (await env_cond.length) + 1;
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

router.delete("/env_cond/:env_id", async (req, res) => {
  try {
    await db.env_cond.destroy({
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
/// /////////////////////////////////
/// City endpoints//////////////////
/// /////////////////////////////////
router.get("/city", async (req, res) => {
  try {
    const city = await db.city.findAll();
    res.json(city);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/city/:city_id", async (req, res) => {
  try {
    const city = await db.city.findAll({
      where: {
        city_id: req.params.city_id,
      },
    });
    res.json(city);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/city", async (req, res) => {
  const city = await db.city.findAll();
  const currentId = (await city.length) + 1;
  try {
    const newDemo = await db.city.create({
      city_id: currentId,
      city_name: req.body.city_name,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/city/:city_name", async (req, res) => {
  try {
    await db.city.destroy({
      where: {
        city_id: req.params.city_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/city", async (req, res) => {
  try {
    await db.city.update(
      {
        city_name: req.body.city_name,
      },
      {
        where: {
          city_name: req.body.city_name,
        },
      }
    );
    res.send("City successfully updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

////////////////////////////////
////// Country end points//////
//////////////////////////////
router.get("/country", async (req, res) => {
  try {
    const country = await db.country.findAll();
    res.json(country);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/country/:country_id", async (req, res) => {
  try {
    const country = await db.country.findAll({
      where: {
        country_id: req.params.country_id,
      },
    });
    res.json(country);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/country", async (req, res) => {
  const country = await db.country.findAll();
  const currentId = (await country.length) + 1;
  try {
    const newDemo = await db.country.create({
      country_id: currentId,
      country_name: req.body.country_name,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/country/:country_name", async (req, res) => {
  try {
    await db.country.destroy({
      where: {
        country_id: req.params.country_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/country", async (req, res) => {
  try {
    await db.country.update(
      {
        country_name: req.body.country_name,
      },
      {
        where: {
          country_name: req.body.country_name,
        },
      }
    );
    res.send("Country successfully updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});


/// /////////////////////////////////
/// City join party//////////////////
/// /////////////////////////////////
router.get("/city_join_party", async (req, res) => {
  try {
    const city_join_party = await db.city_join_party.findAll();
    res.json(city_join_party);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.get("/city_join_party/:city_join_party_id", async (req, res) => {
  try {
    const city_join_party = await db.city_join_party.findAll({
      where: {
        city_join_party_id: req.params.city_join_party_id,
      },
    });
    res.json(city_join_party);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.post("/city_join_party", async (req, res) => {
  const city_join_party = await db.city_join_party.findAll();
  const currentId = (await city_join_party.length) + 1;
  try {
    const newDemo = await db.city_join_party.create({
      city_join_party_id: currentId,
      city_join_party_name: req.body.city_join_party_name,
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.delete("/city_join_party/:city_join_party_name", async (req, res) => {
  try {
    await db.city_join_party.destroy({
      where: {
        city_join_party_id: req.params.city_join_party_id,
      },
    });
    res.send("Successfully Deleted");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/city_join_party", async (req, res) => {
  try {
    await db.city_join_party.update(
      {
        city_join_party_name: req.body.city_join_party_name,
      },
      {
        where: {
          city_join_party_name: req.body.city_join_party_name,
        },
      }
    );
    res.send("City join party successfully updated");
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

router.get('/custom', async (req, res) => {
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
