const links=[
    {
        label: "Week 1",
        url: "week1/index.html"
    },{
        label: "Week 2",
        url: "week2/index.html"
    }
]
//*** */
for (let i = 0; i < links.length; i++ ) {
  let list = document.createElement('li');
  let alink = document.createElement('a');
  alink.setAttribute("href", links[i].url);
  alink.textContent = links[i].label;
  list.appendChild(alink);
  document.querySelector('ol#ws').appendChild(list);
};
