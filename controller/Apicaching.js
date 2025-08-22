const express = require("express");
const NodeCache = require("node-cache");
const fetch = require("node-fetch");

const cache=new NodeCache({ stdTTL: 180, checkperiod: 120 })

module.exports={
    cache
}


