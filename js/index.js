//start of password form
(function () {
  //Display modal on click
  $(".show-prompt-box").click(function (e) {
    e.preventDefault();
    $(".overlay, .prompt-box, .prompt-wrap").fadeIn();
  });

  //Fade out overlay and prompt-box
  $(".overlay, .close").click(function () {
    $(".overlay, .prompt-box").fadeOut();
    $(".code-error").removeClass("is-error");
    e.stopPropagation();
  });

  //Get value and compare to password
  $(".prompt-box form").submit(function (e) {
    e.preventDefault();
    var codeWord = $(".clients").val();

    if (codeWord.toLowerCase() == "iloveyouadarsh") {
      $(".bg_heart, #carousel, .wavesOuterDiv, .wishlistOuterDiv").fadeIn();
      $(".introPasswordModal").fadeOut();
    } else {
      $(".code-error").addClass("is-error");
      $(".prompt-box").addClass("shake");
      setTimeout(function () {
        $(".prompt-box").removeClass("shake");
      }, 1000);
    }
  });
})();
//end of password form

// start of background hearts
$("#header-plugin").load(
  "https://vivinantony.github.io/header-plugin/",
  function () {
    $("a.back-to-link").attr(
      "href",
      "https://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt"
    );
  }
);

var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1);-webkit-animation:love " +
      r_time +
      "s ease;-moz-animation:love " +
      r_time +
      "s ease;-ms-animation:love " +
      r_time +
      "s ease;animation:love " +
      r_time +
      "s ease'></div>"
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1);-webkit-animation:love " +
      (r_time + 5) +
      "s ease;-moz-animation:love " +
      (r_time + 5) +
      "s ease;-ms-animation:love " +
      (r_time + 5) +
      "s ease;animation:love " +
      (r_time + 5) +
      "s ease'></div>"
  );

  $(".heart").each(function () {
    var top = $(this)
      .css("top")
      .replace(/[^-\d\.]/g, "");
    var width = $(this)
      .css("width")
      .replace(/[^-\d\.]/g, "");
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
}, 500);
//end of background hearts

//start of carousel
$(".carousel").carousel();
//end of carousel
/* start of compliments*/
var arrayOfCompliments = [
  "1. Your eyes are absolutely beautiful.",
  "2. You have the prettiest smile.",
  "3. Seeing you laugh makes me happier than anything else in the world.",
  "4. You're super funny. I love all the vlogs you post on your sc story (the chocolate-ratings in London, das quality entertainment!)",
  "5. I'm your biggest fan :-)",
  "6. That ass ???? shIEEEEE",
  "7. You playing with your putty is pretty cute.",
  "8. You are so caring for me and all your friends. I think I'm speaking for everyone when I say, we are all very grateful to have you so close to us.",
  "9. I love how passionate you are about what you believe in. ",
  "10. Your hard work ethic is truly inspiring. There is no doubt in my mind that you are going to achieve all your goals and more.",
  "11. You are super understanding and patient with me when I mess up.",
  "12. I love how much you love Bolt hehe it's adorable",
  "13. You always want the best for me and I am very grateful for that.",
  "14. You give the best cuddles.",
  "15. You never cease to awe me with them fire fits.",
  "16. I feel like I can tell you anything and you'll just be an awesome listener.",
  "17. I love that you take charge in our trips by making the itinerary in visiting new places and having new experiences.",
  "18. I love how confident you are in yourself. It makes you shine!",
  "19. I love that you just spontaneously nap, and have trouble waking up from naps. It's pretty funny HAHA.",
  "20. You push me to be the best version of myself.",
  "21. I can be myself around you. ",
  "22. You are the definition of a strong, indepedent woman and I love it.",
  "23. You are so kind to everyone in my family.",
  "24. You are such a talented painter, holy shit. ",
  "25. You always make time to talk to me, even if you are super busy.",
  "26. You always take into account the way I feel.",
  "27. I love that you have cultured me into Marvel, Hamilton, and many other things.",
  "28. I love it when you sing so passionately to the songs of Hamilton or Demi Levato, it's adorable and makes me smile.",
  "29. I think you are sexy, cute, gorgeous, and pretty all combined into one.",
  "30. I love that I can very easily carry you.",
  "31. I love dancing and vibing with you.",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var complimentPTag = document.getElementById("complimentPTag");
var complimentButton = document.getElementById("complimentButton");
complimentButton.onclick = function (event) {
  if (arrayOfCompliments.length >= 1) {
    console.log("hi");
    var rand_int = getRandomInt(arrayOfCompliments.length);
    complimentPTag.innerHTML = arrayOfCompliments[rand_int];
    $("#complimentPTag").fadeIn();
    arrayOfCompliments.splice(rand_int, 1);
  } else {
    complimentPTag.innerHTML =
      "You've went through all the things I've written here but there's hundreds of more amazing things about you that I plan to add to this list soon.";
  }
};

/* end of compliments*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  //incorporating local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null /*#__PURE__*/,

      React.createElement(
        "h1",
        { className: "app-title" },
        "MY WISHLIST"
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "container" } /*#__PURE__*/,
        React.createElement(
          "div",
          {
            style: {
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto",
            },
          },
          "Help Adarsh find out what to buy you! He's got a lot of money now and wants to spend it on you :)" /*#__PURE__*/,

          React.createElement("br", null) /*#__PURE__*/,
          React.createElement("br", null) /*#__PURE__*/,
          React.createElement("input", {
            type: "text",
            placeholder: "Type item here",
            value: this.state.newItem,
            onChange: (e) => this.updateInput("newItem", e.target.value),
          }) /*#__PURE__*/,

          React.createElement(
            "button",
            {
              className: "add-btn btn-floating",
              onClick: () => this.addItem(),
              disabled: !this.state.newItem.length,
            } /*#__PURE__*/,

            React.createElement("i", { class: "material-icons" }, " + ")
          ) /*#__PURE__*/,

          React.createElement("br", null),
          " ",
          /*#__PURE__*/ React.createElement("br", null) /*#__PURE__*/,
          React.createElement(
            "ul",
            null,
            this.state.list.map((item) => {
              return /*#__PURE__*/ React.createElement(
                "li",
                { key: item.id },
                item.value /*#__PURE__*/,
                React.createElement(
                  "button",
                  {
                    className: "btn btn-floating",
                    onClick: () => this.deleteItem(item.id),
                  } /*#__PURE__*/,
                  React.createElement("i", { class: "material-icons" }, "x")
                )
              );
            })
          )
        )
      )
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("wishlist")
);
