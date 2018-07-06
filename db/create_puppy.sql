insert into puppies
(product, price, image)
values
(${product}, ${price}, ${image})
returning *;