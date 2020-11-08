/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  console.log(`${req.url} is accessed. token is NOT required`);

  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.get("/protected-message", checkJwt, (req, res) => {
  console.log(`${req.url} is accessed. token is required`);
  console.log(req.user);
  
  if(req.user.permissions.includes('read:protected-message')){
    console.log('user has read:protected-message permission');
  }
  else{
    console.log('user do NOT has read:protected-message permission');
  }


  const message = getProtectedMessage();
  res.status(200).send(message);
});

module.exports = {
  messagesRouter,
};
