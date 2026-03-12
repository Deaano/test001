const AllProduct = [
{
id:1,
image:'../Images/topRatedGardenSwingSet.webp',
description:'`10 x 8` strrrrrrmimimimim Inflatable Tent for Camping, 6-8 People Blow up Tent, 4 Season Inflatable House with Stove Jack',
price:'£799.99',
keywords:'garden bbq swing outdoor seat patio',
button:'Check It Out'
},
{
id:2,
image:'../Images/topRatedRobotLawnmower.webp',
description:'`10 x 8` strrrrrrmimimimim Inflatable Tent for Camping, 6-8 People Blow up Tent, 4 Season Inflatable House with Stove Jack',
price:'£901.05',
keywords:'robot bbq lawn mower grass cutting',
button:'Check It Out'
},
{
id:3,
image:'../Images/topRatedTent.webp',
description:'`10 x 8` strrrrrrmimimimim Inflatable Tent for Camping, 6-8 People Blow up Tent, 4 Season Inflatable House with Stove Jack',
price:'£727.44',
keywords:'tent bbq camping outdoor shelter',
button:'Check It Out'
}
];

AllProduct.forEach(product => {
product.searchIndex = `
${product.description}
${product.keywords}
`.toLowerCase();
});