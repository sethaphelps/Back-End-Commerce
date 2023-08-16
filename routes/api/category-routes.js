const router = require("express").Router();
const { Category, Product } = require("../../models");

// Finds all
router.get("/", (req, res) => {
  Category.findAll({ include: [Product] })
    .then((catData) => res.json(catData))
    .catch((err) => res.json(err));
});

// Finds a category by its ID
router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  }).then((catData) => {
    res.json(catData);
  });
});

// Creates a new category
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((catData) => {
      res.json(catData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates a category by its ID value

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((catData) => {
      res.json(catData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Deletes a category by its ID value

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((catData) => {
      res.json(catData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
