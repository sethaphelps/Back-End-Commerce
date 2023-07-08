const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({ include: [Product] }).then((catData) => {
    res.json(catData);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  }).then((catData) => {
    res.json(catData);
  });
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((catData) => {
      res.json(catData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
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

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
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
