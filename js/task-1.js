const itemCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategory.length}`);

itemCategory.forEach(name => {
  const nameCategory = name.querySelector('h2').textContent;
  console.log(`Category: ${nameCategory}`);
  const elementCategory = name.querySelectorAll('ul li').length;
  console.log(`Elements: ${elementCategory}`);
});
