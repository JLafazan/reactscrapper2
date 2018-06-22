import axios from "axios";

export default {
  // Gets all saves
  getSaves: function () {
    return axios.get("/api/saved");
  },
  // Gets the save with the given id
  getSave: function (id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the save with the given id
  deleteSave: function (id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a save to the database
  saveSave: function (saveData) {
    return axios.post("/api/saved", saveData);
  }
};





// router.get("/", function(req, res) {
//   request("http://www.nytimes.com", function(error, response, html) {

//       var articles = [];

//       var $ = cheerio.load(html);

//       $(' div .result').each(function(i, element) {

//           console.log($(this).find('span').html())
//       })

//   });
//   res.send('Done');

// });