/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `StudentController.index()`
   */
  index: function (req, res) {
    Student.find(function(err,finduser){
      if (err) {
        return res.send(err,500);
      }
      res.view({model:finduser});
    });

  },


  /**
   * `StudentController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
		console.log(id);
    Student.findOne(id,function(err,showuser){
      if (err) {
        return res.send(err,500);
      }
      res.view({model:showuser});
    });
  },


  /**
   * `StudentController.new()`
   */
  new: function (req, res) {
    Student.find(function(err,showuser){
      if (err) {
        return res.send(err,500);
      }

      res.view({model:showuser});
    });
  },


  /**
   * `StudentController.create()`
   */
  create: function (req, res) {
   var param = _.extend(req.query || {},req.params || {},req.body || {});
   console.log(param);
    Student.create(param,function(err,createuser){
    if (err) {
      return res.send(err,500);
    }
		console.log(createuser);
    res.redirect('/students');
    });
  },


  /**
   * `StudentController.edit()`
   */
  edit: function (req, res) {
		var id = req.param('id');
		console.log(id);
    Student.findOne(id,function(err,finduser){
      if (err) {
        return res.send(err,500);
      }
			console.log(finduser);
      res.view({model:finduser});
    });
  },


  /**
   * `StudentController.update()`
   */
  update: function (req, res) {
		var param = _.extend(req.query || {},req.params || {},req.body || {});
		var id = req.param('id');
		Student.update(id,param,function(err,updateuser){
		 if (err) {
			 return res.send(err,500);
		 }
		 res.redirect('/students');
		});
  },


  /**
   * `StudentController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
		console.log(id);
    Student.destroy(id,function(err,destroyuser){
      if (err) {
        return res.send(err,500);
      }
      console.log("deleted");
      res.redirect('/students')
    });
  }
};
