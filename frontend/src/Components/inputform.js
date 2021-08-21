import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import SearchResults from "./searchresults";
import Favourites from "./favouritescomponent";

// I used material ui components for the input box and for the select box
// you can find the components here: https://material-ui.com/components/selects/

// the built in styles that come with the component
const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// built in from material UI
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,

    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStylesInput = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

// I wanted to get more familiar with hooks in a functional component so I used hooks instead of a
// class component with a state and constructor function

// I read up on the react docs how to use them and why they are useful
// https://reactjs.org/docs/hooks-intro.html

export default function InputForm() {
  const classes = useStyles();

  // initialise a new state variable for the media select
  const [media, setMedia] = React.useState("");

  // handling the changing of the select component
  const handleChange = (event) => {
    setMedia(event.target.value);
  };

  const classesInput = useStylesInput();
  // new state variable using useState hook
  const [searchText, setSearchText] = React.useState("");

  // handle the change of the text in the input box
  const handleChangeInput = (event) => {
    setSearchText(event.target.value);
  };

  // initialising the results state with hooks, and naming the function that will let us update the state in the future
  const [searchResults, setSearchResults] = React.useState([]);

  // initialising the state for the favourites
  const [favourites, setFavourites] = React.useState([]);

  // handling the adding of the favourites, using es6 destructuring for the array to make sure the new favourites array is set correctly
  const handleAddFavourite = (favouriteDetail) => {
    setFavourites([...favourites, favouriteDetail]);
  };

  // the handler function for removing a favourite
  const handleRemoveFavourite = (favouriteDetail) => {
    // using the es6 destructuring
    let favouriteList = [...favourites];

    // find the index of the one that has been clicked to remove
    let indexToRemove = favouriteList.indexOf(favouriteDetail);

    // splice it from the array
    favouriteList.splice(indexToRemove, 1);

    // set the new state of the favourite to the spliced up array
    setFavourites(favouriteList);
  };

  // handling the search button
  const handleSubmit = () => {
    // an object that will be passed to the fetch method to show that it is a post request
    const postMethod = {
      method: "POST",
    };

    // before fetching handle if they have not entered anything into the search box and also handle if
    // they have not selected a media type so it works with the backend

    if (searchText !== "" && media !== "") {
      // fetch from the backend the data we would like with the search terms
      fetch(`/api?term=${searchText}&media=${media}`, postMethod)
        .then((response) => response.json())
        .then((data) => {
          // using the function to update the state of the results
          setSearchResults(data.results);
        })
        .catch((err) => console.log(err));
    } else {
      // If they have not entered in the search box or selected a media type, alert them
      alert(
        "Please enter what you would like to search for and what media type"
      );
    }
  };

  return (
    <div id="formInput">
      {/* giving it a min width for styling */}
      <FormControl className={classesInput.margin} style={{ minWidth: 300 }}>
        <InputLabel htmlFor="demo-customized-textbox">
          What are you looking for?
        </InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          // the value of the input passed down from the state variable, no need to use this like in class components
          value={searchText}
          onChange={handleChangeInput}
        />
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        style={{ minWidth: 300, backgroundColor: "white" }}>
        <InputLabel htmlFor="outlined-age-native-simple">Media Type</InputLabel>
        <Select
          native
          // the state of media passed down as value
          value={media}
          // the onchange handler
          onChange={handleChange}
          label="Media Type"
          inputProps={{
            name: "media",
            id: "outlined-age-native-simple",
          }}>
          {/* the select options below */}
          <option aria-label="None" value="" />
          <option value={"movie"}>Movie</option>
          <option value={"podcast"}>Podcast</option>
          <option value={"music"}>Music</option>
          <option value={"musicVideo"}>Music Video</option>
          <option value={"audiobook"}>Audiobook</option>
          <option value={"shortFilm"}>Short Film</option>
          <option value={"tvShow"}>TV Show</option>
          <option value={"software"}>Software</option>
          <option value={"ebook"}>Ebook</option>
          <option value={"all"}>All</option>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        size="large"
        color="primary"
        id="searchButton"
        className={classes.margin}
        // pass the onclick function for handling the submit
        onClick={() => handleSubmit()}>
        Search
      </Button>
      {/* add a results component and a favourites component */}
      {/* pass add favourite handler as the results you can add it to your favourite */}
      <SearchResults
        searchResults={searchResults}
        handleAddFavourite={handleAddFavourite}
      />
      {/* pass the remove from favourites handler to the favourites cards */}
      <Favourites
        favourites={favourites}
        handleRemoveFavourite={handleRemoveFavourite}
      />
    </div>
  );
}
