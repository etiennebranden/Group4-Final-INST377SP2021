/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the GROUP 4 Air Pollution APP!');
});

/// /////////////////////////////////
/// ////Demgraphics Endpoints////////
/// /////////////////////////////////
router.get('/demo', async (req, res) => {
  try {
    const demo = await db.demo.findAll();
    const reply = demos.length > 0 ? { data: demos } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/demo/:demo_id', async (req, res) => {
  try {
    const demo = await db.demo.findAll({
      where: {
        demo_id: req.params.demo_id
      }
    });

    res.json(demo);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/demo', async (req, res) => {
  const demo = await db.demo.findAll();
  const currentId = (await demos.length) + 1;
  try {
    const newDemo = await db.demo.create({
      demo_id: currentId,
      race: req.body.race,
      religion: req.body.religion,
      annual_income: req.body.annual_income,
      gender_ratio: req.body.gender_ratio
    });
    res.json(newDemo);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/demo/:hall_id', async (req, res) => {
  try {
    await db.demo.destroy({
      where: {
        demo_id: req.params.demo_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/demo', async (req, res) => {
  try {
    await db.demo.update(
      {
        race: req.body.race,
        religion: req.body.religion
      },
      {
        where: {
          demo_id: req.body.demo_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/* Everything past here needs to be changed to point to OUR database, not the dining hall database that it 
// is currently pointing
*/

/// /////////////////////////////////
/// ////////Pollution Endpoints//////////
/// /////////////////////////////////
router.get('/meals', async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/pollution/:pollution_id', async (req, res) => {
  try {
    const pollution = await db.Pollution.findAll({
      where: {
        pollution_id: req.params.pollution_id
      }
    });

    res.json(pollution);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/meals', async (req, res) => {
  try {
    await db.Meals.update(
      {
        meal_name: req.body.meal_name,
        meal_category: req.body.meal_category
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Meal Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



/// /////////////////////////////////
/// ////////Development Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/development/:development_id', async (req, res) => {
  try {
    const development = await db.Development.findAll({
      where: {
        development_id: req.params.development_id
      }
    });
    res.json(development);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/macros', async (req, res) => {
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
        fat: req.body.fat
      },
      {
        where: {
          meal_id: req.body.meal_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Environment Conditions Endpoints///
/// /////////////////////////////////
router.get('/restrictions', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/environment_conditions/:env_id', async (req, res) => {
  try {
    const conditions = await db.EnvironmentConditions.findAll({
      where: {
        env_id: req.params.env_id
      }
    });
    res.json(conditions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
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
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
