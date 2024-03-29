const shows = [
  {
    label1: "date",
    date: "Mon Sep 06 2021",
    label2: "venue",
    venue: "Ronald Lane",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Tue Sep 21 2021",
    label2: "venue",
    venue: "Pier 3 East",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Fri Oct 15 2021",
    label2: "venue",
    venue: "View Lounge",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Sat Nov 06 2021",
    label2: "venue",
    venue: "Hyatt Agency",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Fri Nov 26 2021",
    label2: "venue",
    venue: "Moscow Center",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Wed Dec 15 2021",
    label2: "venue",
    venue: "Press Club",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
];

//target parents container
const showsContainers = document.querySelector(".shows__list");

for (let i = 0; i < shows.length; i++) {
  let showsObj = shows[i];
  createShowsCard(showsObj);
}

//new function to create elements
function createShowsCard(showsData) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("shows__cards");
  showsContainers.appendChild(itemEl);

  //add click even listener to toggle background color
  itemEl.addEventListener("click", function () {
    this.classList.toggle("shows__cards--selected");
  });

  //new elements
  const sublistEl = document.createElement("ul");
  sublistEl.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublistEl);

  const subitemEl = document.createElement("li");
  subitemEl.classList.add("shows__label");
  subitemEl.innerText = showsData.label1;
  sublistEl.appendChild(subitemEl);

  const newSubitemEl = document.createElement("li");
  newSubitemEl.classList.add("shows__info--date");
  newSubitemEl.innerText = showsData.date;
  sublistEl.appendChild(newSubitemEl);

  const sublist_2El = document.createElement("ul");
  sublist_2El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_2El);

  const subitem_2El = document.createElement("li");
  subitem_2El.classList.add("shows__label");
  subitem_2El.innerText = showsData.label2;
  sublist_2El.appendChild(subitem_2El);

  const newSubitem_2El = document.createElement("li");
  newSubitem_2El.classList.add("shows__info--venue");
  newSubitem_2El.innerText = showsData.venue;
  sublist_2El.appendChild(newSubitem_2El);

  const sublist_3El = document.createElement("ul");
  sublist_3El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_3El);

  const subitem_3El = document.createElement("li");
  subitem_3El.classList.add("shows__label");
  subitem_3El.innerText = showsData.label3;
  sublist_3El.appendChild(subitem_3El);

  const newSubitem_3El = document.createElement("li");
  newSubitem_3El.classList.add("shows__info--location");
  newSubitem_3El.innerText = showsData.location;
  sublist_3El.appendChild(newSubitem_3El);

  const sublist_4El = document.createElement("ul");
  sublist_4El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_4El);

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("shows__button");
  buttonEl.innerText = showsData.button;
  sublist_4El.appendChild(buttonEl);
}

//add itle "Shows" and labels for tabletAndDesktop

//target parents container//
const showsTitleEl = document.querySelector(".shows__title");

//add title name
const showsTitleNameEl = document.createElement("h2");
showsTitleNameEl.classList.add("shows__title-name");
showsTitleNameEl.textContent = "Shows";
showsTitleEl.appendChild(showsTitleNameEl);

//target parents container
const showsSubheadTablet = document.querySelector(
  ".shows__subhead--tabletAndDesktop"
);

//add lables for tablet and desktop
const dateListItem = document.createElement("li");
dateListItem.classList.add("shows__date");
dateListItem.textContent = "date";
showsSubheadTablet.appendChild(dateListItem);

const venueListItem = document.createElement("li");
venueListItem.classList.add("shows__venue");
venueListItem.textContent = "venue";
showsSubheadTablet.appendChild(venueListItem);

const locationListItem = document.createElement("li");
locationListItem.classList.add("shows__location");
locationListItem.textContent = "location";
showsSubheadTablet.appendChild(locationListItem);
