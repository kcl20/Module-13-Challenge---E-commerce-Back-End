const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    // find all products
    // be sure to include its associated Category and Tag data
    try {
      console.log("request received to get all tags");
      const tagData = await Tag.findAll({
        include:[{model: Product}],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that id!' });
        return;
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });


  // create a new tag  
  router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create(req.body);
      res.status(200).json(tagData);
      console.log("successfully created a new tag: " + tagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update a tag's name by its `id` value
  router.put('/:id', (req, res) => {
    // Calls the update method on the tag model
    Tag.update(
      {
        // All the fields you can update and the data attached to the request body.
        tag_name: req.body.tag_name,
      },
      {
        // Gets the tag based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((tagData) => {
        // Sends the updated tag as a json response
        res.json(tagData);
        console.log("successfully updated a tag: " + tagData);
      })
      .catch((err) => res.json(err));
  });
  


  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with that id!' });
        return;
      }
  
      res.status(200).json(tagData);
      console.log("successfully deleted a tag: " + tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
