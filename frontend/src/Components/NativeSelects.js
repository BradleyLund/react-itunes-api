import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

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

export default function NativeSelects() {
  const classes = useStyles();
  const [media, setMedia] = React.useState("");

  const handleChange = (event) => {
    setMedia(event.target.value);
    console.log(media);
  };

  return (
    <div>
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
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}
