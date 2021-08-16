import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

// I probably need to combine the two input and select into one component to access both states when the user clicks submit
// maybe try using hooks to get that working
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
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

export default function InputForm() {
  const classes = useStyles();
  const [media, setMedia] = React.useState("");

  const handleChange = (event) => {
    setMedia(event.target.value);
    console.log(media);
  };

  const classesInput = useStylesInput();
  const [searchText, setSearchText] = React.useState("");
  const handleChangeInput = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);
    console.log(media);
  };

  return (
    <div>
      <FormControl className={classesInput.margin} style={{ minWidth: 300 }}>
        <InputLabel htmlFor="demo-customized-textbox">Search</InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          value={searchText}
          onChange={handleChangeInput}
        />
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        style={{ minWidth: 300 }}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Type of Media
        </InputLabel>
        <Select
          native
          value={media}
          onChange={handleChange}
          label="Type of Media"
          inputProps={{
            name: "media",
            id: "outlined-age-native-simple",
          }}>
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
    </div>
  );
}
