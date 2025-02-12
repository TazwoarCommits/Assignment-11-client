import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";


const ThemeProvider = ({children}) => {
    return (
          <ThemeContext>
             {children}
          </ThemeContext>
    );
};

ThemeProvider.propTypes = {
    children : PropTypes.object
}

export default ThemeProvider;