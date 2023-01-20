const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all categories
// be sure to include its associated Products

router.get('/', async (req, res) => {
  try {
    console.log("request received to get all categories");
    const categoryData = await Category.findAll({
      include:[{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});



  // find one category by its `id` value
  // be sure to include its associated Products

  // router.get('/:id', (req, res) => {
  //   // Find a single book by its primary key (book_id)
  //   Category.findByPk(req.params.id).then((categoryData) => {
  //     res.json(categoryData);
  //   });
  // });


router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});




  // create a new category
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
      console.log("successfully created a new category: " + categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });





  // update a category by its `id` value
router.put('/:id', (req, res) => {
  // Calls the update method on the Category model
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name,
    },
    {
      // Gets the category based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((categoryData) => {
      // Sends the updated category as a json response
      res.json(categoryData);
      console.log("successfully updated a category: " + categoryData);
    })
    .catch((err) => res.json(err));
});






  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
      console.log("successfully deleted a category: " + categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;
