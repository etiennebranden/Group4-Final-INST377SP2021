<!-- # This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.

* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

* [Markdown guide](https://www.markdownguide.org/cheat-sheet/) -->

# Air Pollution Group Project

## Description
Air pulltion has been one of huge climate change issue, and people includes students, young and old generations want to learn more about it,  but it could be hard to undertsand. To address this issue, we developed a website that retrieve and manipulate data to easily gain a larger understanding on climate change. We tried to utilize a database on particle pollution with data ranging from Seoul to New South Wales. Our dataset is air quality levels worldwide to get better understanding of the various environmental factors that contribute to air quality in different countries.
<!-- <img src="0100Home.png" alt="0100's Website Home"> -->

## Link to Website
[https://vast-garden-63288.herokuapp.com/](https://vast-garden-63288.herokuapp.com/)

## Target Browsers
* Macbook 13", Macbook Pro 13"/15"
* Notebook 13"/15"
* Desktop 19"/20"/22"/23"/24"

## Link to Developer Manual
* [Developer Manual](https://github.com/etiennebranden/Group4-Final-INST377SP2021/blob/main/README.md#developer-manual)


# Developer Manual

## How to Install Application and Dependencies
1. Clone this repostiory using GithHub Desktop or through your Terminal
2. Open this repository in VSCode or on your terminal
3. Open a new terminal in VSCode if using VSCode
4. In the terminal, type in `npm install` and run it
5. You should be ready to run the application.

## Running the Application on a Server
1. Open this repository in VSCode or your terminal
2. Open a new terminal in VSCode if using VSCode
3. In the terminal, type in `npm start` and run it
4. In a web browser go to this url: `http://localhost:3000/`.
5. You should now see the application running on the server

## Sever Application API
`/api` - API route for getting pollution data
- Get - Sends a message gretting the User "Welcome to the Group 4 Air Pollution APP

## Server Application API Routes
Concatenating these to the `/api` API will give you access to the different endpoints
`/demo` - API route for getting demographic data
- Get  - Responds with the data for that demographic id in request body
- Post - Responds with the new demographic added in request body
- Put - Responds with "Successfully Updated" in request body when race or religion is updated for an id
- Delete - Response with "Successfully Deleted" in request body when demographic is deleted for an id

`/pollution`
- Get  - Responds with the data for that pollution id in request body
- Post - Responds with the new pollution infomration added in request body
- Put - Responds with "Successfully Updated" in request body when pollution level is updated for an id
- Delete - Response with "Successfully Deleted" in request body when pollution is deleted for an id

`/pol_party`
- Get  - Responds with the data for that political party id in request body
- Post - Responds with the new political party added in request body
- Put - Responds with "Successfully Updated" in request body when politicial party name is updated for an id
- Delete - Response with "Successfully Deleted" in request body when political party is deleted for an id

`/dev`
- Get  - Responds with the data for that development id in request body
- Post - Responds with the new development added in request body
- Put - Responds with "Successfully Updated" in request body when development name is updated for an id
- Delete - Response with "Successfully Deleted" in request body when a development is deleted for an id

`/env_cond`
- Get  - Responds with the table data for enviornment conditions or for that id in request body
- Post - Responds with the new enviornmental condition added in request body
- Delete - Response with "Successfully Deleted" in request body when demographi is deleted for an id

`/city`
- Get  - Responds with the table data for cities or for that id in request body
- Post - Responds with the new city added in request body
- Put - Responds with "Successfully Updated" in request body when city name is updated for an id
- Delete - Response with "Successfully Deleted" in request body when city is deleted for an id

`/country`
- Get  - Responds with the table data for countries or for id specified in request body
- Post - Responds with the new country added in request body
- Put - Responds with "Successfully Updated" in request body when country name is updated for an id
- Delete - Response with "Successfully Deleted" in request body when country is deleted for an id

`/city_join_party`
- Get  - Responds with the joined data of cities and their political party affiliation in request body
- Post - Responds with the new data added in request body
- Put - Responds with "Successfully Updated" in request body when city political party is updated for an id
- Delete - Response with "Successfully Deleted" in request body when city's political party is deleted for an id

# Known bugs and Future Development 
## Bugs
- The city_join_party endpoint has no data
- Search function on the database page is currently not functional

## Future Development 
- Fix the city_join_party table so that the endpoint points to actual data
- Fix the search bar function so that users may search for pollution data for city name or pollution id 
- Create a map graph to display the geographical locations of each of the data points in the database or search
