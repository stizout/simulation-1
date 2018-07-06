create table if not exists puppies (
    id serial primary key,
    product text,
    price int,
    image text
);

insert into puppies (product, price, image)
values
('Golden Doodle', 1000, 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Miniature-Goldendoodle-600x600.jpg'),
('French Bulldog', 1200, 'https://i.pinimg.com/originals/8d/10/29/8d102902ffbfb374311c8abd2e127a81.jpg');